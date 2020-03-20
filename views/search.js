import React, { useState, useEffect} from 'react';
import theme from '../styles';
import { connect } from 'react-redux';
import { setLinea, setReclamo } from '../redux/actions/index';

import { dataService } from '../services/users';
import Card from '../components/Card'

import {  Text, Chip } from 'react-native-paper';

import { StyleSheet, View, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';

function Search(props) {
  const [lineas, setLineas] = useState([]);
  const [value, onChangeValue] = useState('')
  const [dataload, setLoad] = useState(false)

  const getLineasData = async () => {
    //setLineas('')
    setLoad(true);
    let res;
    res =  await dataService.getLineas(value);
    setLineas(res.data);
    setLoad(false);
  }
  
  const userSelect = (value) => {
    props.setReclamo(undefined);
    props.setLinea(value);
    props.navigation.navigate('UserInformation')
  }

    function fillTableRow(){
      if (lineas) {
      return (
        lineas.map(( user, i)=> {
          // Estado de la cuenta
          const is_Active = () => {
            let status = (user.is_active) ? 
            <Chip style={styles.chip__active}> 
              <Icon name="check" color={ theme.colors.backgroundLight } /> 
            </Chip> : 
            <Chip style={styles.chip__inactive}>
              <Icon name="times" color={ theme.colors.backgroundLight } />
            </Chip> ;
            return status;
          }
          return (
            <TouchableOpacity key={i} onPress={(e) =>{ userSelect(user)}}>
              <Card>
                <View style={styles.card}>
                  <View>
                    { ( user.telefono ) ? <Text style={styles.card__number}>{user.telefono}</Text> : <Text style={styles.card__number}>Sin numero</Text>}
                    <Text style={styles.card__name}>{user.razon_social}</Text>
                  </View>
                  <View>
                    { is_Active() }
                  </View> 
                </View>
              </Card>
            </TouchableOpacity>);
        }));
        } else { 
          return <Text style={styles.helper}> La busqueda no coincide con ningun dato existente.</Text>
        }
    };
    return (
      <>
      <View style={styles.card_input}>
        <Icon name="search" size={20} color={ theme.colors.disabled }/>
        <TextInput style={styles.input}
        maxLength={15}
        placeholderTextColor={theme.colors.disabled}
        placeholder="Teléfono o razon social ..." 
        returnKeyType="search" 
        onSubmitEditing={getLineasData} 
        onChangeText={text => {onChangeValue(text), setLineas('')}} 
        autoFocus={true}
        />
        { dataload && <ActivityIndicator />}
      </View>
      <View style={styles.container}>
        <ScrollView>
          {fillTableRow()}
        </ScrollView>
      </View>
      
    </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card_input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundLight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    paddingLeft: 20,
    paddingRight:20,
    height: 60,
    marginBottom: 20,
  },

  input: {
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: theme.colors.backgroundLight,
    color: theme.colors.text,
    alignItems: 'center',
    height: 60,
    fontSize: 16,
    paddingLeft: 20,
  },
  card__number: {
    fontSize: 20,
    fontWeight: '100',
    color: theme.colors.text,

  },
  card__name: {
    fontSize: 16,
    color: theme.colors.text,
    maxWidth: 190,
  },
  card__icon: {
    display: 'flex',
    textAlign: 'center',
    lineHeight: 40,
    width: 40,
    height: 40,
    backgroundColor: theme.colors.primary,
    color: '#FFF',
    borderRadius: 30,
  },
  helper: {
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 20,
    padding: 50
  },
  chip__active: {
    backgroundColor: '#06D6A0',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chip__inactive: {
    backgroundColor: '#EF476F',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setLinea, setReclamo})(Search);
