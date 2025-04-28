// screens/ScrollViewScreen.js
import React from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import StudentCard from '../components/StudentCard';
import studentData from '../data/studentData';

const ScrollViewScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {studentData.map((item, index) => (
                <StudentCard
                    key={index}
                    name={item.name}
                    lastname={item.lastname}
                    rollNumber={item.rollNumber}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 40,
    },
});

export default ScrollViewScreen;
