import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Greet from '../components/Greet';
import CustomBtn from '../components/CustomBtn';
import Login from './login';
import SView from './ScrollView/SView';
import Flist from './Flatlist/Flist';
import FlatListScreen from './FlatListScreen';
import ScrollViewScreen from './ScrollViewScreen';
import Card from '../components/Card';
import useCard from './useCard';
import ListingDetail from './ListingDetail';
import ViewImageScreen from './ViewImageScreen';
import MessagesScreen from './MessagesScreen';

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
                <CustomBtn title="ScroolView" onPress={() => navigation.navigate('SView')} />
            </View>
            <View style={styles.row}>
                <CustomBtn title="Flat List" onPress={() => navigation.navigate('Flist')} />
            </View>
            <View style={styles.row}>
                <CustomBtn title="Flat List" onPress={() => navigation.navigate('FlatListScreen')} />
                <CustomBtn title="Scroll View" onPress={() => navigation.navigate('ScrollViewScreen')} />
            </View>
            <View style={styles.row}>
                <CustomBtn title="useCard" onPress={() => navigation.navigate('useCard')} />
                <CustomBtn title="ListingDetail" onPress={() => navigation.navigate('ListingDetail')} />
            </View>
            <View style={styles.row}>
                <CustomBtn title="ViewImageScreen" onPress={() => navigation.navigate('ViewImageScreen')} />
                <CustomBtn title="MessagesScreen" onPress={() => navigation.navigate('MessagesScreen')} />
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