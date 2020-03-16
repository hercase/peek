import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BarLogo = () => {
    return <Image style={styles.logo} source={require('../assets/peek-dark.png')} />
}

const styles = StyleSheet.create({
    logo: {
        height: 65, 
        width: 175,
        resizeMode: 'contain',
    }
});

export default BarLogo;