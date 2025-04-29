import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function Card({ title, subTitle, Image: imageSource }) {
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "#f8f4f4",
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'green',
        paddingHorizontal: 10,
        paddingBottom: 10,
    }
});

export default Card;
