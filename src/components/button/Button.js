import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({ children, style = {}, onPress = () => {} }) {
    return (
        <Pressable onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.title}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(239, 176, 52, 1)',
        padding: 9,
        borderRadius: 6,
        width: '100%',
    },
    title: { color: '#fff', textAlign: 'center', fontSize: 16, lineHeight: 26 },
});
