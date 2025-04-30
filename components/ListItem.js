import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ListItem = ({ title, subTitle, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
    },
    subTitle: {
        fontSize: 16,
        color: '#6e6969',
        marginTop: 4,
    },
});

export default ListItem;
