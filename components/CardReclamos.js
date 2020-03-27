import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';
import theme from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5'

// Services
import { dataService } from '../services/users';
// Redux
import { connect } from 'react-redux';
import { setLinea, setReclamo } from '../redux/actions/index';

const CardReclamos = ( props ) => {

   const reclamo = props.reclamo;
   let maxString = 1;

   const userInfo = async (value) => {
       let res;
       res = await dataService.getLineas(value);
       if (res.error === false)
       {    
            props.setReclamo(reclamo)
            props.setLinea(res.data[0]);
            props.navigation.navigate('UserInformation')
       }

   }



    return (
        <TouchableOpacity onPress={(e) => {userInfo(reclamo.telefono)}}>
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

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15 ,
        marginHorizontal: 15,
        marginVertical: 5,
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
        textAlign: 'center',
        fontSize: 14,
    },
    card_body_title: {
        color:  theme.colors.disabled,
        fontSize: 14,
    },
    card_body_desc: {
        fontSize: 14,  
    },
    card_icon: { 
        marginTop: 10,
        alignItems: 'flex-end',

    },
});


const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
  export default connect(mapStateToProps, {setLinea, setReclamo})(CardReclamos);