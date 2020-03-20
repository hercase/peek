import React, {useState, useEffect,useCallback} from 'react';
import theme from '../styles';
import { dataService } from '../services/users';

import { connect } from 'react-redux';

import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const HistoryDetails = (props) => {
    const user = props.values.linea;
<<<<<<< HEAD
    var stop = false;

=======
    const stop = false;
>>>>>>> 8e2db46098b81ab0b4b5be9f11ac126e3456987c
    const [ordenes, setOrdenes] = useState([]);

    const getOrdenesData = useCallback(async () => {
        let res;
        res =  await dataService.getOrdenLinea(user.id);
        setOrdenes(res.data);
    })
    useEffect(() => {
      getOrdenesData();
    },[stop])
        
        function fillTableRow(){
            if (ordenes){
                return (
                    ordenes.map((orden, i) => {
                        return (
                            <Card  key={i} style={styles.card}>
                            <View style={styles.card__title}>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{"Orden # "+orden.numero}</Text> 
                                    <Text style={styles.card_body_title} >Inconveniente:</Text>
                                </View>
                                <View>
                                    <Text style={styles.card_title_fecha}>{orden.fecha}</Text>
                                    <Text style={styles.card_body_desc} >{orden.inconveniente}</Text>
                                </View>
                            </View>
                            <Text style={styles.card_body_title}>Detalle:</Text>
                            <Text style={styles.card_body_desc}>{orden.descripcion}</Text>
                            <Text style={styles.card_body_title}>Acciones:</Text>
                            <Text style={styles.card_body_desc}>{orden.acciones}</Text>
                        </Card>
                        );
                    })
                )
            } else {
                return (
                  <Text style={{ textAlign: 'center', marginTop: 20, color: theme.colors.primary }}> Sin historial de ordenes. </Text>
                  );
              }
        };

        return (
            <View style={{ marginTop: 10 }} onRefresh={getOrdenesData}>
                { getOrdenesData()  ?
              <ScrollView>
                {fillTableRow()}
                </ScrollView>
                : <ActivityIndicator />
                }
            </View>
        );
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        marginTop: 5,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 15,
    },
    card__title: { 
        fontSize: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    card_title_numero: { 
        fontSize: 17,
    },
    card_title_fecha: { 
        textAlign: 'right',
        color: theme.colors.primary,
        fontSize: 14,
    },
    card_body_title: {
        color: theme.colors.disabled,
        fontSize: 14,
    },
    card_body_desc: {
        fontSize: 14,
        
    },
});

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
export default connect(mapStateToProps)(HistoryDetails);