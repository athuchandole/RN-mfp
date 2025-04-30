import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import ListItem from '../components/ListItem';

const ListingDetail = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/imgs/mac1.jpg')}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Product 1</Text>
                <Text style={styles.price}>$999</Text>
            </View>
            <ListItem
                title="Mr.Ath"
                subTitle="Milky Way Galaxy"
                image={require('../assets/imgs/pp1.jpg')}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        color: '#888',
    },
});

export default ListingDetail;
