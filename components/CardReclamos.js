import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import theme from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5'

import * as Animatable from 'react-native-animatable';

const CardReclamos = ( props ) => {

   const reclamo = props.reclamo;
   let maxString = 1;
   if (props.maxString){
        maxString = props.maxString;
   }



    return (
        <View style={styles.card}> 

            <View style={styles.card__title}>
                <View>
                    <Text style={{ fontSize: 18, color: 'black' }}> {"# "+reclamo.numero}</Text> 
                    <Text style={styles.card_body_title} >Inconveniente:</Text>
                    <Text style={styles.card_body_desc} >{reclamo.inconveniente}</Text>
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="phone" color='#011627'/>
                    <Text style={styles.card_title_numero}> {reclamo.telefono}</Text> 
                </View>
                    <Text style={styles.card_title_fecha}>{reclamo.fecha}</Text>
                </View>
            </View>
            <Text style={styles.card_body_title}>Detalle:</Text>

                <Text numberOfLines={maxString} style={styles.card_body_desc}>{reclamo.detalle}</Text>


        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default CardReclamos;