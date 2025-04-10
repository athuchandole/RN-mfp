import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greet from '../components/Greet';

const CallGreet = () => {
    return (
        <View style={styles.container}>
            <Greet name="Atharv" />
        </View>
    );
};

export default CallGreet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
