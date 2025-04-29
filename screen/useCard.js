import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';

function useCard(props) {
    return (
        <View style={{ backgroundColor: "Gray", padding: 20, paddingTop: 100, }}>
            <Card
                title="Product 1"
                subTitle="999"
                Image={require("../assets/imgs/mac1.jpg")}
            />
        </View>
    );
}

export default useCard;