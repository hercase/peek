import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../styles';

function UserHeader(props){

    return (
      <Fragment>
        <View style={styles.header}>
          <View>
            <Text style={styles.header__title}>{ props.values.linea.telefono ? props.values.linea.telefono : '***' }</Text>
            <Text style={styles.header__subtitle}>{ props.values.linea.razon_social ? props.values.linea.razon_social : '***'}</Text>
          </View>
        </View>
     </Fragment>
    );
  }

  const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: theme.colors.backgroundLight,
        padding: 25
      },
    header__title: {
        fontSize: theme.fontsizes.t1,
        fontWeight: 'bold',
        color: theme.colors.primary
      },
      header__subtitle: {
        fontSize: theme.fontsizes.t4,
        color: theme.colors.backgroundDark,


      }
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps)(UserHeader);