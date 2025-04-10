import { View, Text } from 'react-native';
import React from 'react';

const Greet = ({ name }) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Hello, {name} 👋</Text>
        </View>
    );
};

export default Greet;
