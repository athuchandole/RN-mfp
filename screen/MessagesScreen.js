import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { Swipeable } from 'react-native-gesture-handler';

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
    const handleDelete = (message) => {
        // Delete logic here (e.g., update state or make API call)
        console.log('Delete tapped:', message);
    };

    return (
        <Screen style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <Swipeable
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    >
                        <ListItem
                            title={item.title}
                            subTitle={item.description}
                            image={item.image}
                            onPress={() => console.log('Message Selected', item)}
                        />
                    </Swipeable>
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
