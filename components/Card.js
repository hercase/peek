import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ( props ) => {
    return (
        <View style={styles.card}>
            { props.children }
        </View>
    );
};
const styles = StyleSheet.create({
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
});
export default Card;