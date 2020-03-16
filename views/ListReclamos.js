import React, {useState, useEffect} from 'react';

import { dataService } from '../services/users';

import { connect } from 'react-redux';
import { setReclamo } from '../redux/actions/index';

import Card from '../components/CardReclamos';
import { StyleSheet, View, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import theme from '../styles';


const ListReclamos = (props) => {
    const stop = false;
    const [reclamos, setReclamos] = useState([]);
    const [maxString, setmaxString] = useState(0);
    const [index, setIndex] = useState(null);
    const [selected, setSelected] = useState({});
    
    const getReclamosData = async () => {
        let res;
        res =  await dataService.getReclamosZona();
        setReclamos(res.data);
    }
    useEffect(() => {
        getReclamosData();
    },[stop])
        
    const showMore = (value, index) => {
        (maxString == 1) ? setmaxString(3) : setmaxString(1);
        setSelected(value);
        setIndex(index);

    }

    
    

        /*function fillTableRow(){
            if (reclamos){
                return (
                    reclamos.map((reclamo, i) => {
                        return (
                        <TouchableOpacity key={i}  onPress={(e) =>{ setSections(reclamo)}}>
                            <Card  key={i} >
                            <View style={styles.card__title}>
                                <View>
                                    <Text style={{ fontSize: 18, color: 'black' }}> {"# "+reclamo.numero}</Text> 
                                    <Text style={styles.card_body_title} >Inconveniente:</Text>
                                    <Text style={styles.card_body_desc} >{reclamo.inconveniente}</Text>
                                </View>
                                <View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="phone" color='#011627'/>
                                    <Text style={styles.card_title_numero}> {reclamo.telefono}</Text> 
                                </View>
                                    <Text style={styles.card_title_fecha}>{reclamo.fecha}</Text>
                                </View>
                            </View>
                            <Text style={styles.card_body_title}>Detalle:</Text>
                            {
                               isCollapsed ? 

                               
                                    <Text key={index} style={styles.card_body_desc}>{reclamo.detalle}</Text>
                               :
                               <Text numberOfLines={maxString} style={styles.card_body_desc}>{reclamo.detalle}</Text>
                            }
                            </Card>
                        </TouchableOpacity>
                        );
                    })
                )
            } 
        };*/

        function fillTableRow(){
            if (reclamos){
                return (
                    reclamos.map((reclamo, i) => {
                        return (
                        <TouchableOpacity key={i}  onPress={(e) =>{ showMore(reclamo, i)}}>
                            {
                                reclamo.numero === selected.numero ? 
                                <Card reclamo={selected}  maxString={maxString}/>
                                :
                                <Card reclamo={reclamo} />
                            }
                        </TouchableOpacity>
                        );
                    })
                )
            } 
        };

        return (
            <View style={{ margin: 10 }}>
                {fillTableRow()}
            </View>
        );
}

/*
                <Accordion
                activeSections={section}
                //for any default active section
                sections={reclamos}
                //title and content of accordion
                touchableComponent={TouchableWithoutFeedback}
                //which type of touchable component you want
                //It can be the following Touchables
                //TouchableHighlight, TouchableNativeFeedback
                //TouchableOpacity , TouchableWithoutFeedback
                //expandMultiple={multipleSelect}
                //Do you want to expand mutiple at a time or single at a time
                renderHeader={renderHeader}
                //Header Component(View) to render
                renderContent={renderContent}
                //Content Component(View) to render
                duration={400}
                //Duration for Collapse and expand
                onChange={setSections}
                //setting the state of active sections
                />
                */
const styles = StyleSheet.create({
    card__title: { 
        fontSize: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    card_title_numero: { 
        fontSize: 17,
    },
    card_title_fecha: { 
        textAlign: 'right',
        fontSize: 14,
    },
    card_body_title: {
        color:  theme.colors.disabled,
        fontSize: 14,
    },
    card_body_desc: {
        fontSize: 14,
        
    },
    card: {
        backgroundColor: '#fff',
        padding: 15 ,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    card_content: {
        backgroundColor: '#fff',
        padding: 15 ,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        overflow: 'hidden'
    },
});

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
  }
  
  
export default connect(mapStateToProps, {setReclamo})(ListReclamos);


