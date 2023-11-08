import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from './src/components/button/Button';
import Drink from './src/components/drink/Drink';

const items = [
    {
        image: require('./assets/Image 5 (1).png'),
        title: 'Title 1',
        price: '20',
    },
    {
        image: require('./assets/Image 5 (2).png'),
        title: 'Title 2',
        price: '20',
    },
    {
        image: require('./assets/Image 5 (3).png'),
        title: 'Title 3',
        price: '20',
    },
    {
        image: require('./assets/Image 5 (4).png'),
        title: 'Title 4',
        price: '20',
    },
    {
        image: require('./assets/Image 5 (1).png'),
        title: 'Title 5',
        price: '20',
    },
];

export default function Screen03({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => <Drink item={item} />}
                keyExtractor={(item, index) => index}
                contentContainerStyle={styles.list}
            />

            <Button
                onPress={() => {
                    navigation.navigate('Screen04', { cart });
                }}
            >
                GO TO CART
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 57,
    },
    list: {
        gap: 16,
    },
});
