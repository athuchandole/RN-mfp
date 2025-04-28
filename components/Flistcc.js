import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flistcc = ({ name, lastname, rollNumber }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name: {name} {lastname}</Text>
            <Text style={styles.text}>Roll No: {rollNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
    },
});

export default Flistcc;
