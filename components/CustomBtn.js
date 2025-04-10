import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomBtn = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#001F3F',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
    },

})

