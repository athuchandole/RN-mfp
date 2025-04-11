import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustInput = ({ placeholder, value, onChangeText, keyboardType = 'default', autoCapitalize = 'sentences', secureTextEntry = false }) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default CustInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },
});
