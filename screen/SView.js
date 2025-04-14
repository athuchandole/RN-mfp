import { View, Text, StyleSheet, StatusBar, Platform, ScrollView } from 'react-native';
import React from 'react';

const getStatusBarHeight = () => {
    return Platform.OS === 'android' ? StatusBar.currentHeight : 0;
};

const SView = () => {
    return (
        <ScrollView style={[styles.container, { paddingTop: getStatusBarHeight() }]}>
            <Text style={styles.text}>ScrollView</Text>
            <View style={{ height: 150, width: "100%", backgroundColor: 'pink' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'red' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'yellow' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'grey' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'skyblue' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'tomato' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'yellow' }}></View>
            <View style={{ height: 150, width: "100%", backgroundColor: 'black' }}></View>
        </ScrollView>
    );
};

export default SView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 30,
    },
});
