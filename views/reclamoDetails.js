import React from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Divider } from 'react-native-paper';
import Card from '../components/Card'; 
import theme from '../styles';

function ReclamoDetails(props) {

  const reclamo = props.values.reclamo;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card>
          <View style={styles.line}>
            <Text style={styles.item}>{ '# '+reclamo.numero }</Text>
            <Text style={styles.item}>{reclamo.fecha}</Text> 
          </View>
          <Divider style={{ margin: 15 }} />
          <View style={styles.line}>
          <Text style={styles.item} >Inconveniente:</Text>
            <Text style={styles.text} >{reclamo.inconveniente}</Text>
          </View>
          <Divider style={{ margin: 15 }} />
          <View>
            <Text style={styles.item}>Detalle:</Text>
            <Text style={styles.text}>{reclamo.detalle}</Text>
          </View>
          </Card>
        </View>
      </ScrollView>

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
  }
});

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

/*const mapDispatchToProps = dispatch => {
      return {
        setLineas: data => dispatch(setLineas(data))
      }
}*/


export default connect(mapStateToProps)(ReclamoDetails);

