import React from 'react';
import { FlatList, ScrollView, View, StyleSheet, Text } from 'react-native';

// Temporary StudentCard component if not defined elsewhere
const StudentCard = ({ name, lastname, rollNumber }) => (
    <View style={styles.card}>
        <Text>{`${rollNumber}. ${name} ${lastname}`}</Text>
    </View>
);

const originalData = [
    { name: "Megan", lastname: "Chang", rollNumber: 1 },
    { name: "Robert", lastname: "Green", rollNumber: 2 },
    { name: "William", lastname: "Sullivan", rollNumber: 3 },
    { name: "Kristen", lastname: "Turner", rollNumber: 4 },
    { name: "Thomas", lastname: "Silva", rollNumber: 5 }
];

const data = Array.from({ length: 500 }, (_, i) => {
    const item = originalData[i % originalData.length];
    return {
        ...item,
        rollNumber: i + 1
    };
});

const Flist = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <StudentCard
                        name={item.name}
                        lastname={item.lastname}
                        rollNumber={item.rollNumber}
                    />
                )}
                style={styles.list}
            />

            <ScrollView style={styles.scrollView}>
                {data.map((item, index) => (
                    <StudentCard
                        key={index}
                        name={item.name}
                        lastname={item.lastname}
                        rollNumber={item.rollNumber}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 40,
    },
    list: {
        flex: 1,
        marginBottom: 20,
    },
    scrollView: {
        flex: 1,
    },
    card: {
        padding: 10,
        marginVertical: 4,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
    },
});

export default Flist;
