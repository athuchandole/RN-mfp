// screens/FlatListScreen.js
import React from 'react';
import { FlatList, View, StyleSheet, Button } from 'react-native';
import StudentCard from '../components/StudentCard';
import studentData from '../data/studentData';

const FlatListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={studentData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <StudentCard
                        name={item.name}
                        lastname={item.lastname}
                        rollNumber={item.rollNumber}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 40,
    },
});

export default FlatListScreen;
