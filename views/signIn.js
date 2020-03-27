import React, { useState } from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { setToken } from '../redux/actions/index';
import { dataService } from '../services/users';
import theme from '../styles';
import DeviceInfo from 'react-native-device-info';
import { Button } from 'react-native-paper';

function SignIn(props) {
  const [ isLoading, setIsLoading ] = useState(false);
  const uniqueID = DeviceInfo.getUniqueId();
  
  const submit = async () => {
    setIsLoading(true)
    let res;
    res = await dataService.getSigIn(uniqueID);
    if (res.error === false)
    { 
      await AsyncStorage.setItem('token', res.data.token);  
      setIsLoading(false)
      props.setToken(res.data.token);
    } else {
      setIsLoading(false)
    }
  }

    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/peek-dark.png')} />
          <Button style={styles.button}  loading={isLoading} icon="lock" mode="contained" onPress={() => submit()}>
            Validar Identidad
          </Button>
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
    width: 200
  }
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setToken})(SignIn);