import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function OrderTag({ item }) {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: item.backgroundColor },
            ]}
        >
            <View style={styles.info}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.order}</Text>
            </View>
            <Text style={styles.textLarge}>${item.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        flexDirection: 'row',
        paddingTop: 24,
        paddingLeft: 13,
        paddingBottom: 13,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    info: {
        gap: 11,
    },
    text: { color: '#fff', fontWeight: '700', fontSize: 16, lineHeight: 26 },
    textLarge: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
    },
});
