import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const UserHeader = (props) => {
  const user = props.values.linea;
    return (
      <View style={styles.container}>
        <View style={styles.line}>
        <View style={styles.header}>
                <View>
                    <Text style={styles.header__title}>{ user.telefono }</Text>
                    <Text style={styles.header__subtitle}>{ user.razon_social }</Text>
                </View>
            </View>
        </View>
     </View>
    );
  }
  const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        fontSize: 18,
        backgroundColor: 'white',
        padding: 25
      },
    header__title: {
        fontSize: 28,
        fontFamily: 'Nunito',
      },
      header__subtitle: {
        fontSize: 17,
      }
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps)(UserHeader);