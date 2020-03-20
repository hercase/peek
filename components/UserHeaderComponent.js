import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../styles';

function UserHeader(props){
  const user = props.values.linea;
    return (
      <Fragment>
        <View style={styles.header}>
          <View>
            <Text style={styles.header__title}>{ user.telefono }</Text>
            <Text style={styles.header__subtitle}>{ user.razon_social }</Text>
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
      },
      header__subtitle: {
        fontSize: theme.fontsizes.t2,
      }
});


const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps)(UserHeader);