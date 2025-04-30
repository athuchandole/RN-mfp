import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: 'John Doe',
        description: 'Hey! Is this item still available?',
        image: require('../assets/imgs/mac1.jpg'),
    },
    {
        id: 2,
        title: 'Jane Smith',
        description: 'I’m interested. Can we meet tomorrow?',
        image: require('../assets/imgs/mac1.jpg'),
    },
];

const MessagesScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f4f4',
        paddingTop: Constants.statusBarHeight,
    },
});

export default MessagesScreen;
