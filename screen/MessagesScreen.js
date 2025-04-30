import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';

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
        <Screen style={styles.container}>
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
                ItemSeparatorComponent={ListSeparator}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
    },
});

export default MessagesScreen;
