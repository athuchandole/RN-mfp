// RandomImg.jsx
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RandomImg({ }) {
    const [uri, setUri] = useState('https://picsum.photos/200/300');

    const refreshImage = () => {
        const newUri = `https://picsum.photos/200/300?reload=${Date.now()}`;
        setUri(newUri);
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={{ width: 300, height: 500 }}
            />
            <TouchableOpacity style={styles.btn} onPress={refreshImage}>
                <Text style={styles.btnText}>Refresh Image</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
