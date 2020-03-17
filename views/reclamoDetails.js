import React from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import { Divider } from 'react-native-paper';

function ReclamoDetails(props) {

  const reclamo = props.values.reclamo;
    return (
      <View style={styles.container}>
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
      </View>

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  item: {
    fontSize: 20,
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

