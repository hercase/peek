import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setLinea, setHide, setCantidadReclamos } from '../redux/actions/index';
import { StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity, RefreshControl } from 'react-native';
import { Text } from 'react-native-paper';
import { dataService } from '../services/users';
import ContentLoader, { Rect } from "react-content-loader/native"
import theme from '../styles';

import CardStyle from '../components/Card';
import Card from '../components/CardReclamos';

// Vista de reclamos.
const ReclamosView = ( props ) => {
	return (
		<View style={{ marginBottom: 55 }}>
			<View style={ styles.view_title }>
				<Text style={ styles.view_text }>Reclamos</Text>
                { props.values.hide === false && <ActivityIndicator size="small" color={theme.colors.disabled} />}
			</View>
			<ListReclamos {...props}/>
		</View>
    );
};

// Componente para generar cada reclamo.
const ListReclamos = (props) => {
    const stop = false;
    const [reclamos, setReclamos] = useState([]);
    const [index, setIndex] = useState(null);
	const [selected, setSelected] = useState({});
	const [refreshing, setRefreshing] = useState(false);

    const getReclamosData = async () => {
        let res;
		res =  await dataService.getReclamosZona();
		setReclamos(res.data);
		props.setCantidadReclamos(res.data.length)
		props.setHide(true);
		//setRefreshing(false)
	}
	function wait(timeout) {
		return new Promise(resolve => {
		  setTimeout(resolve, timeout);
		});
	  }

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		getReclamosData();
		wait(2000).then(() => {
			setRefreshing(false);
		});
	  }, [refreshing]);

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
			<ScrollView  
				style={{ backgroundColor: theme.colors.background }}
				refreshControl={ 
					<RefreshControl 
						refreshing={refreshing} 
						colors={[theme.colors.primary]} 
						progressBackgroundColor={theme.colors.backgroundDark} 
						onRefresh={onRefresh} 
					/> 
				}
			>
				{ fillTableRow() }
			</ScrollView>
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

export default connect(mapStateToProps, { setLinea, setHide, setCantidadReclamos })(ReclamosView);
