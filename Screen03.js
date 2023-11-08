import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import config from './config';
import Button from './src/components/button/Button';
import Drink from './src/components/drink/Drink';
import useCart from './src/context/CartContext';

export default function Screen03({ navigation }) {
    const [items, setItems] = useState([]);
    const { cart } = useCart();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${config.ENDPOINT}/drinks`);
            const data = await res.json();

            setItems(data);
        })();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <Drink item={item} />}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={styles.list}
                />

                <Button
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Screen04', { cart });
                    }}
                >
                    GO TO CART
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 32,
    },
    btn: {
        marginTop: 57,
    },
    list: {
        gap: 16,
    },
});
