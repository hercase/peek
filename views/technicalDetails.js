import React , {useEffect, useState }from 'react';
import { connect } from 'react-redux';
import { dataService } from '../services/users';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';


const TechnicalDetails = (props) => {
  const stop = false;
  const user = props.values.linea;
  const [datosTec, setDatosTec] = useState([])
  const [cablePares, setCablePares] = useState([])
  const [ports, setPorts] = useState([])

  const getDatosTec = async () => {
    let res;
    res =  await dataService.getDatosTecnicos(user.id);
    setDatosTec(res.data);
    res =  await dataService.getCablePares(user.id);
    setCablePares(res.data);
    res =  await dataService.getPorts(user.id);
    setPorts(res.data);
  }
  useEffect(() => {
    getDatosTec();
  },[stop])   
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <View>
            <Text style={styles.title}>Catastro</Text>
            <Text style={styles.text}>{ datosTec.catastro }</Text>
          </View>
          <View>
            <Text style={styles.title}>Shelter</Text>
            <Text style={styles.text}>{cablePares && cablePares.shelter}</Text>
          </View>
        </View>
        <Divider style={{ margin: 15}} />
        <View style={styles.line}>
          <Text style={styles.title}>N° - Tipo Caja:</Text>
          <Text style={styles.text}>{ datosTec.nro_tipo_caja }</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.title}>Cable: </Text>
          <Text style={styles.text}>{ cablePares && cablePares.numero }</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.title}>Par: </Text>
          <Text style={styles.text}>{ cablePares && cablePares.par}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.title}>Port: </Text>
          <Text style={styles.text}>{ ports.port }</Text>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  flexitem: {
    display: 'flex',
    flexDirection: 'row',
  }

});

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps)(TechnicalDetails);