import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLinea, setHide } from '../redux/actions/index';
import { StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { dataService } from '../services/users';
import ContentLoader, { Rect } from "react-content-loader/native"
import theme from '../styles';

import CardStyle from '../components/Card';
import Card from '../components/CardReclamos';

// Vista de reclamos.
const ReclamosView = ( props ) => {
	return (
		<View >
			<View style={ styles.view_title }>
				<Text style={ styles.view_text }>Reclamos</Text>
                { props.values.hide === false && <ActivityIndicator size="small" color={theme.colors.disabled} />}
			</View>
			<ScrollView>
				<ListReclamos {...props}/>
			</ScrollView>
		</View>
    );
};

// Componente para generar cada reclamo.
const ListReclamos = (props) => {
    const stop = false;
    const [reclamos, setReclamos] = useState([]);
    const [index, setIndex] = useState(null);
    const [selected, setSelected] = useState({});

    const getReclamosData = async () => {
        let res;
        res =  await dataService.getReclamosZona();
        setReclamos(res.data);
		props.setHide(true);
	}

    useEffect(() => {
        props.setLinea(false)
        getReclamosData();
	},[stop])

    const showMore = (value) => {
        setSelected(value);
        setIndex(index);
    }

    function fillTableRow(){
        if (true){
            return (
                reclamos.map((reclamo, i) => {
                    return (
						<TouchableOpacity key={i}  onPress={(e) =>{ showMore(reclamo, i)}}>
							{
								reclamo.numero === selected.numero ? 
								<Card reclamo={selected} {...props}/>
								:
								<Card reclamo={reclamo} {...props} />
							}
						</TouchableOpacity>
                    );
                })
            )
        } else {
        return (
            <CardStyle>
                <Loader />
            </CardStyle>
        )
        }
    };

    return (
        <View style={{ margin: 10 }}>
			{ fillTableRow() }
        </View>
    );
};

const Loader = () => (
    <ContentLoader 
		speed={2}
		width={300}
		height={100}
		viewBox="0 0 300 100"
		backgroundColor={theme.colors.background}
		foregroundColor='#fff'
	>
		<Rect x="2" y="9" rx="5" ry="5" width="25" height="15" /> 
		<Rect x="2" y="30" rx="5" ry="5" width="80" height="10" /> 
		<Rect x="2" y="65" rx="5" ry="5" width="60" height="10" /> 
		<Rect x="2" y="80" rx="5" ry="5" width="300" height="10" /> 
		<Rect x="2" y="45" rx="5" ry="5" width="50" height="10" /> 
		<Rect x="210" y="9" rx="5" ry="5" width="90" height="15" /> 
		<Rect x="220" y="30" rx="5" ry="5" width="80" height="10" />
	</ContentLoader>
)


const styles = StyleSheet.create({
	view_title: {
		backgroundColor: theme.colors.backgroundLight,
		marginBottom: 0, 
		paddingVertical: 15,
		paddingHorizontal: 25,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	view_text: {
		color: theme.colors.disabled,
		fontSize: 19,
		fontFamily: 'Roboto',
	}
});

const mapStateToProps = ( state ) => {
	return {
		values : state.teleReducer
	}
}

export default connect(mapStateToProps, { setLinea, setHide })(ReclamosView);
