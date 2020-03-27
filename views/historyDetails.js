import React, {useState,useEffect } from 'react';
import theme from '../styles';
import { dataService } from '../services/users';

import { connect } from 'react-redux';

import { Card, Text, ActivityIndicator, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const HistoryDetails = (props) => {
    const user = props.values.linea;
    const [ordenes, setOrdenes] = useState([]);
    const [load, setLoad] = useState(false);

    const getOrdenesData = async () => {
        let res;
        res =  await dataService.getOrdenLinea(user.id);
        setOrdenes(res.data);
        setLoad(true)
    }

    useEffect(() => {
        getOrdenesData();
    },[user])

        function fillTableRow(){
            if (ordenes){
                return (
                    ordenes.map((orden, i) => {
                        return (
                            <Card  key={i} style={styles.card}>
                            <View style={styles.card__title}>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{"Orden # "+orden.numero}</Text> 
                                    <Text style={styles.card_body_desc} >Inconveniente: { orden.inconveniente }</Text>
                                </View>
                                <View>
                                    <Text style={styles.card_title_fecha}>{orden.fecha}</Text>
                                </View>
                            </View>
                            <Divider style={{ margin: 5 }} />
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
            <>
            {load && 
            <View style={{ marginTop: 10 }}>
              <ScrollView>
                {fillTableRow()}
                </ScrollView>
            </View>
             }
            </>
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
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5
    },
    card_title_numero: { 
        fontSize: theme.fontsizes.t3,
    },
    card_title_fecha: { 
        textAlign: 'right',
        color: theme.colors.primary,
        fontSize: theme.fontsizes.t4,
    },
    card_body_title: {
        color: theme.colors.disabled,
        fontSize: theme.fontsizes.t5,
    },
    card_body_desc: {
        fontSize: theme.fontsizes.t5,
        color: theme.colors.text
    },
});

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
export default connect(mapStateToProps)(HistoryDetails);