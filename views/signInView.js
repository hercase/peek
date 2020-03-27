import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { connect } from 'react-redux';
import { setToken } from '../redux/actions/index';

import { dataService } from '../services/users';
import theme from '../styles';

import DeviceInfo from 'react-native-device-info';
import { Button, Text } from 'react-native-paper';

function SignIn(props) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const uniqueID = DeviceInfo.getUniqueId();
  
  const handleSubmit = async () => {
    setIsLoading(true)
    let res;
    res = await dataService.getSigIn(uniqueID);
    if (res.error === false)
    { 
      setIsLoading(false)
      props.setToken(res.data.token);
    } else {
      setIsLoading(false)
      setError(true)
    }
  }

    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/peek-dark.png')} />
          <View style={{ height: 60 }}>
            <Button style={styles.button}  loading={isLoading} icon="lock" mode="contained" onPress={() => handleSubmit()}>
              Validar Identidad
            </Button>
            { error && <Text style={styles.error}> SIN AUTORIZACIÓN </Text> }
          </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 100, 
    width: 300,
    resizeMode: 'contain',
    marginBottom: 50
    },
  button: {
    width: 200,
  },
  error: {
    color: theme.colors.primary,
    fontSize: theme.fontsizes.t5,
		textAlign: 'center',
    marginVertical: 15,
	},
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setToken})(SignIn);