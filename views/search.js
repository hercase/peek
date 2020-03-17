import React, { useState} from 'react';
import theme from '../styles';
import { connect } from 'react-redux';
import { setLinea } from '../redux/actions/index';

import { dataService } from '../services/users';
import Card from '../components/Card'

import {  Text } from 'react-native-paper';

import { StyleSheet, View, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';

function Search(props) {
  const [lineas, setLineas] = useState([]);
  const [value, onChangeText] = useState('')
  const [dataload, setLoad] = useState(false)
  const [error, setError] = useState('')
  // Llena el State con datos
  const getLineasData = async () => {
    if ( value.length >= 3 ) {
      setLoad(true);
      let res;
      res =  await dataService.getLineas(value);
      setLineas(res.data);
      (res.error) && setError('No se encontraron cuentas.')
      setLoad(false);
    } else {
      setError('Se requieren 3 caracteres como minimo para iniciar una busqueda.')
    }
  }

  // Fija el usuario seleccionado al hacer click
  const userSelect = (value) => {
    props.setLinea(value);
    props.navigation.navigate('UserInformation')
  }

  // Rellena el View principal con los datos
  function fillTableRow(){
    if (lineas) {
    return (
      lineas.map(( user, i)=> {
        return (
        <TouchableOpacity key={i} onPress={(e) =>{ userSelect(user)}}>
        <Card style={styles.card}>
          <View style={styles.card__data}>
            { ( user.telefono ) ? <Text style={styles.card__number}>{user.telefono}</Text> : <Text style={styles.card__number}>Sin numero</Text>}
            <Text style={styles.card__name}>{user.razon_social}</Text>
          </View>
        </Card>
        </TouchableOpacity>);
      }));
      }else { return <Text style={styles.helper}> { error } </Text>}
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
        onChangeText={text => {onChangeText(text), setLineas(''), setError('')}} />
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
    marginLeft: 20,
    marginRight: 20,
  },
  card_input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.backdrop,
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
    backgroundColor: theme.colors.backdrop,
    color: theme.colors.text,
    alignItems: 'center',
    height: 60,
    fontSize: 16,
    paddingLeft: 20,
  },
  card__number: {
    fontSize: 25,
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
  }
});

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setLinea})(Search);
