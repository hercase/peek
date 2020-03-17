import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {TextInput, Snackbar} from 'react-native-paper'
import { connect } from 'react-redux';
import { setToken } from '../redux/actions/index';
import { dataService } from '../services/users';
import theme from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SignIn(props) {
  const [user, onChangeText] = useState('')
  const [pass, onChangePass] = useState('')
  const [error, setError] = useState(false)
  let inputs = {};
  const focusTheField = (id) => {
    inputs[id].focus();
  }

  const submit = async () => {
    let res;
    res = await dataService.getSigIn(user, pass);
    if (res.error === false)
    {   
      props.setToken(res.data.token);
    } else {
      setError(true);
    }
  }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <Image style={styles.logo} source={require('../assets/peek-dark.png')} />
        </View>
        <View style={{ flex: 1, flexGrow: 1, justifyContent: "center", margin: 50}}>
          <TextInput style={styles.input}
            autoFocus={true}
            mode='outlined'
            placeholderTextColor={theme.colors.disabled}
            placeholder="Usuario" 
            returnKeyType="next" 
            onChangeText={text => {onChangeText(text)}}
            onSubmitEditing={() => { focusTheField('password') }}
            ref={input => { inputs['user'] = input }}
          />
          <TextInput style={styles.input}
            ref={input => { inputs['password'] = input }}
            mode='outlined'
            placeholderTextColor={theme.colors.disabled}
            placeholder="Contraseña"
            returnKeyType="go"
            secureTextEntry={true} 
            onChangeText={text => {onChangePass(text)}} 
            onSubmitEditing={(e) => submit()}
            /> 
          </View>
        <View style={{ flex: 1 }}> 
          <View style={styles.buttonContainer}>   
            <TouchableOpacity 
              style={styles.button}
              onPress = {(e) => submit()}
            >
              <Text style={{fontSize: 18, color: 'white' }}>INGRESAR</Text>
              <Icon name='chevron-right' style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
        <Snackbar
          duration={Snackbar.DURATION_SHORT}
          style={{backgroundColor: theme.colors.background}}
          visible={error}
          onDismiss={() => setError(false)}
          action={{
            label: 'OK',
            onPress: () => { focusTheField('user') },
          }}
        >
          <Text style={{color: theme.colors.text}}>Los datos de ingreso son invalidos.</Text>
        </Snackbar>
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
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
    width: 300,
    height: 50
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.accent,
    height: 50,
    width: 180,
    borderRadius: 50,
    
  },
  font: {
    color: theme.colors.background, 
    fontSize: 15,
    letterSpacing: 1,
  },
  icon: {
    color: theme.colors.background, 
    fontSize: 18,
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