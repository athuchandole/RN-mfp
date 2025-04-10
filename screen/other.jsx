// screen/other.jsx
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Greet from '../components/Greet';
import CustomBtn from '../components/CustomBtn';
import Login from './login';

const Other = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Greet name="Atharv" />
            <Text style={styles.text}>Practice List</Text>

            <View style={styles.row}>
                <CustomBtn title="Login" onPress={() => navigation.navigate('Login')} />
                <CustomBtn title="Image" onPress={() => navigation.navigate('RandomImg')} />

            </View>

            <View style={styles.row}>
                <CustomBtn title="Greet" onPress={() => navigation.navigate('CallGreet')} />
                <CustomBtn title="4" onPress={() => navigation.navigate('CallGreet')} />
            </View>
        </View>
    );
};

export default Other;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 40 : 0,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        gap: 15,
    },
});
