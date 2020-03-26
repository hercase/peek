import React from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import { Divider } from 'react-native-paper';
import Card from '../components/Card';
import theme from '../styles';

function UserDetails(props) {

  const user = props.values.linea;
    return (
      <View style={styles.container}>
        <Card>
          <View>
            <Text style={styles.item}>Domicilio</Text>
            <Text style={styles.text}>{ user.domicilio }</Text>
          </View>
          <Divider style={{ margin: 15 }} />
          <View style={styles.line}>
            <Text style={styles.item}>Zona:</Text>
            <Text style={styles.text}>{ user.descripcion } </Text>
          </View>
        </Card>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: theme.fontsizes.t4,
  },
  item: {
    fontWeight: 'bold',
    fontSize: theme.fontsizes.t3,
    color: theme.colors.backgroundDark
  },
});

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps)(UserDetails);

