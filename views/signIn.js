import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import { setToken } from '../redux/actions/index';
import { dataService } from '../services/users';
import theme from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SignIn(props) {
  const [user, onChangeText] = useState('')
  const [pass, onChangePass] = useState('')

  const submit = async () => {
    let res;
    res = await dataService.getSigIn(user, pass);
    if (res.error === false)
    {   
      props.setToken(res.data.token);
    }
  }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <Image style={styles.logo} source={require('../assets/peek-dark.png')} />
        </View>
        <View style={{ flex: 1, flexGrow: 1, justifyContent: "center", marginVertical: 40}}>
          <TextInput style={styles.input}
            placeholderTextColor={theme.colors.disabled}
            placeholder="Usuario" 
            returnKeyType="next" 
            onChangeText={text => {onChangeText(text)}}
          />
          <TextInput style={styles.input}
            placeholderTextColor={theme.colors.disabled}
            placeholder="Contraseña"
            returnKeyType="go"
            secureTextEntry={true} 
            onChangeText={text => {onChangePass(text)}} /> 
          </View>
        <View style={{ flex: 1 }}> 
          <View style={styles.buttonContainer}>   
            <TouchableOpacity 
              style={styles.button}
              onPress = {(e) => submit()}
            >
              <Text style={{fontSize: 20, color: 'white' }}>INGRESAR</Text>
              <Icon name='chevron-right' style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.backgroundDark,
  },
  input: {
    backgroundColor: theme.colors.backdrop,   
    padding: 10,
    marginBottom: 10,
    borderRadius: 30,
    fontSize: 18,
    textAlign: 'center',
    width: 300,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.accent,
    height: 60,
    width: 200,
    borderRadius: 50,
    
  },
  font: {
    color: theme.colors.background, 
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    color: theme.colors.background, 
    fontSize: 25,
  },
  logo: {
    height: 85, 
    width: 300,
    resizeMode: 'contain',
    }
  ,
  buttonContainer: {
    alignItems: 'center',
  }
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setToken})(SignIn);