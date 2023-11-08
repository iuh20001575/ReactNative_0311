import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Product from './src/components/product/Product';
import config from './config';

export default function Screen02({ navigation }) {
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
        <ScrollView contentContainerStyle={styles.contentList}>
            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </ScrollView>
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