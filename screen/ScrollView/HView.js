import { View, Text, StyleSheet, StatusBar, Platform, ScrollView, } from 'react-native';
import React from 'react';
import CustomBtn from '../../components/CustomBtn';

const getStatusBarHeight = () => {
    return Platform.OS === 'android' ? StatusBar.currentHeight : 0;
};

const HView = ({ }) => {
    return (
        <>
            <View style={[styles.container, { paddingTop: getStatusBarHeight() }]}>
                <Text style={styles.text}> Horizhontal View</Text>
                <ScrollView horizontal={true}
                >
                    <View style={{ height: 150, width: "100", backgroundColor: 'pink' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'red' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'yellow' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'grey' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'skyblue' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'tomato' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'yellow' }}></View>
                    <View style={{ height: 150, width: "100", backgroundColor: 'black' }}></View>
                </ScrollView>
            </View>
        </>
    );
};

export default HView;

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
