// screen/other.jsx
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Greet from '../components/Greet';

const Other = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Greet name="Atharv" />
            <Text style={styles.text}>Other Practice</Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Login Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('RandomImg')}>
                    <Text style={styles.btnText}>Image</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CallGreet')}>
                    <Text style={styles.btnText}>Greet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Button 4</Text>
                </TouchableOpacity>
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
    btn: {
        backgroundColor: '#001F3F',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
    },
});
