import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from './src/components/button/Button';
import Drink from './src/components/drink/Drink';
import OrderTag from './src/components/orderTag/OrderTag';

const orderTags = [
    {
        backgroundColor: 'rgba(0, 189, 214, 1)',
        title: 'CAFE DELIVERY',
        order: 'Order #18',
        price: 5,
    },
    {
        backgroundColor: 'rgba(131, 83, 226, 1)',
        title: 'CAFE',
        order: 'Order #18',
        price: 25,
    },
];

export default function Screen04({ route }) {
    const cart = route.params?.cart ?? [];

    return (
        <View style={styles.container}>
            {orderTags.map((orderTag, index) => (
                <OrderTag key={index} item={orderTag} />
            ))}

            <FlatList
                contentContainerStyle={styles.contentStyle}
                data={cart}
                renderItem={({ item }) => <Drink item={item} />}
                keyExtractor={(item, index) => index}
            />

            <Button style={styles.payBtn}>PAY NOW</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingLeft: 24, paddingRight: 19, gap: 7 },
    contentStyle: { gap: 2 },
    payBtn: {
        marginTop: 103,
    },
});
