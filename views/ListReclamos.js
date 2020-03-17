import React, {useState, useEffect} from 'react';

import { dataService } from '../services/users';

import { connect } from 'react-redux';
import { setReclamo } from '../redux/actions/index';

import Card from '../components/CardReclamos';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import theme from '../styles';


const ListReclamos = (props) => {
    const stop = false;
    const [reclamos, setReclamos] = useState([]);
    const [maxString, setmaxString] = useState(0);
    const [index, setIndex] = useState(null);
    const [selected, setSelected] = useState({});

    const getReclamosData = async () => {
        let res;
        res =  await dataService.getReclamosZona();
        setReclamos(res.data);
    }
    useEffect(() => {
        getReclamosData();
    },[stop])
        
    const showMore = (value, index) => {
        (maxString == 1) ? setmaxString(3) : setmaxString(1);
        setSelected(value);
        setIndex(index);

    }
    function fillTableRow(){
        if (reclamos){
            return (
                reclamos.map((reclamo, i) => {
                    return (
                    <TouchableOpacity key={i}  onPress={(e) =>{ showMore(reclamo, i)}}>
                        {
                            reclamo.numero === selected.numero ? 
                            <Card reclamo={selected}  maxString={maxString} router={props.data}/>
                            :
                            <Card reclamo={reclamo} router={props.data}/>
                        }
                    </TouchableOpacity>
                    );
                })
            )
        } 
    };

    return (
        <View style={{ margin: 10 }}>
            {fillTableRow()}
        </View>
    );
}

const styles = StyleSheet.create({
    card__title: { 
        fontSize: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    card_title_numero: { 
        fontSize: 17,
    },
    card_title_fecha: { 
        textAlign: 'right',
        fontSize: 14,
    },
    card_body_title: {
        color:  theme.colors.disabled,
        fontSize: 14,
    },
    card_body_desc: {
        fontSize: 14,
        
    },
    card: {
        backgroundColor: '#fff',
        padding: 15 ,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    card_content: {
        backgroundColor: '#fff',
        padding: 15 ,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        overflow: 'hidden'
    },
});

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
export default connect(mapStateToProps)(ListReclamos);


