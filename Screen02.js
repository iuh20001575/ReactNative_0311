import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import config from './config';
import Product from './src/components/product/Product';

export default function Screen02() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const rest = await fetch(`${config.ENDPOINT}/shops`);
            const data = await rest.json();

            setProducts(data);
        }

        getData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentList}>
                {products.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 22,
    },
    contentList: {
        gap: 20,
        paddingHorizontal: 20,
    },
});
