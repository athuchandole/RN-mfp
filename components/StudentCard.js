// components/StudentCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentCard = ({ name, lastname, rollNumber }) => (
    <View style={styles.card}>
        <Text>{`${rollNumber}. ${name} ${lastname}`}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 4,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
    },
});

export default StudentCard;
