import React, {useState, useCallback, useEffect} from 'react';

import { dataService } from '../services/users';

import { connect } from 'react-redux';

import { Card, Text } from 'react-native-paper';
import { StyleSheet, View, RefreshControl, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import theme from '../styles';

const ServicesDetails = (props) => {
    const user = props.values.linea;

    const [servicios, setServicios] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    function wait(timeout) {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }
    const getServicesData = async () => {
      let res;
      res =  await dataService.getServiciosLinea(user.id);
      setServicios(res.data);
    }
    const onRefresh = useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => {
        getServicesData();
        setRefreshing(false);
      });
    }, [refreshing]);

    useEffect(() => {
      getServicesData();
    },[user])
        function fillTableRow(){
            if (servicios){
                return (
                  servicios.map((servicio, i) => {
                        return (
                          <Card  key={i} style={styles.card}>
                            <View style={styles.card__title}>
                                <View>
                                    <Text style={styles.card_body_title} >Servicio { servicio.tipo.toLowerCase()}</Text>
                                    <Text style={styles.card_body_desc} >{servicio.servicio}</Text>
                                </View>
                                <View>
                                    <Text style={styles.card_title_fecha}>{servicio.fecha}</Text>
                                </View>
                            </View>
                          </Card>
                        );
                    })
                )
            } else {
                return (
                  <Text style={{ textAlign: 'center', marginTop: 100, color: theme.colors.primary }}> Sin servicios de telefonía </Text>
                  );
            }
        };

        return (
            <View style={{ marginTop: 10 }}>
                <ScrollView 
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[theme.colors.primary]} progressBackgroundColor={theme.colors.backgroundDark}/>
                  }
                >
                  { fillTableRow() }
                </ScrollView>
            </View>
        );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15,
        marginTop: 5,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 1,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 15,
    },
    card__title: { 
        fontSize: theme.fontsizes.t3,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    card_title_numero: { 
        color: '#011627',
        fontSize: theme.fontsizes.t3,
    },
    card_title_fecha: { 
      textAlign: 'right',
      color: theme.colors.primary,
      fontSize: theme.fontsizes.t4,
    },
    card_body_title: {
        color: '#ACB5CA',
    },
    card_body_desc: {
        color: '#42484F',
        fontSize: theme.fontsizes.t5
    },
});

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
export default connect(mapStateToProps)(ServicesDetails);