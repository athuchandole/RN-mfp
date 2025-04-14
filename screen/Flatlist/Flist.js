import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Flist = () => {
    const data = [
        { key: 'Amit' },
        { key: 'SK' },
        { key: 'Atharv' },
        { key: 'A' },
        { key: 'B' },
        { key: 'C' },
        { key: 'D' },
        { key: 'E' },
        { key: 'F' },
        { key: 'G' },
        { key: 'H' },
        { key: 'I' },
        { key: 'J' },
        { key: 'K' },
        { key: 'L' },
        { key: 'M' },
        { key: 'N' },
        { key: 'O' },
        { key: 'P' },
        { key: 'Q' },
        { key: 'R' },
        { key: 'S' },
        { key: 'T' },
        { key: 'U' },
        { key: 'V' },
        { key: 'W' },
        { key: 'X' },
        { key: 'Y' },
        { key: 'Z' }

    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.key}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Flist;
