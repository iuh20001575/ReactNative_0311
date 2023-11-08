import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Product({ item }) {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('Screen03', { item });
    };

    return (
        <Pressable onPress={handleClick} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <View style={styles.status}>
                    <View style={styles.acceptWrapper}>
                        {(item.accept_order && (
                            <Image
                                style={styles.acceptOrder}
                                source={require('../../../assets/tick.png')}
                            />
                        )) || (
                            <Image
                                style={styles.unAcceptOrderImage}
                                source={require('../../../assets/material-symbols_lock.png')}
                            />
                        )}
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: item.accept_order
                                        ? '#1DD75B'
                                        : '#DE3B40',
                                },
                            ]}
                        >
                            {item.accept_order
                                ? 'Accepting Orders'
                                : 'Tempory Unavailable'}
                        </Text>
                    </View>
                    <View style={styles.acceptWrapper}>
                        <Image
                            style={styles.clockImage}
                            source={require('../../../assets/clock.png')}
                        />
                        <Text style={[styles.text, { color: '#DE3B40' }]}>
                            {item.time}
                        </Text>
                    </View>
                    <Image
                        style={styles.locationImage}
                        source={require('../../../assets/location.png')}
                    />
                </View>
                <Text style={[styles.textLarge, styles.name]}>{item.name}</Text>
                <Text style={[styles.text, { color: 'rgba(23, 26, 31, 0.6)' }]}>
                    {item.address}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 22,
    },
    textLarge: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 26,
    },
    container: { backgroundColor: '#fff', borderRadius: 6 },
    image: { width: '100%', aspectRatio: 347 / 114, borderRadius: 6 },
    info: { padding: 7, paddingBottom: 0 },
    status: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    acceptWrapper: {
        flexDirection: 'row',
        gap: 9,
        backgroundColor: '#F3F4F6',
        paddingVertical: 4,
        paddingHorizontal: 6,
    },
    acceptOrderImage: { width: 19, height: 14 },
    unAcceptOrderImage: { width: 24, height: 24 },
    clockImage: { width: 18, height: 18 },
    locationImage: { width: 14, height: 18, marginLeft: 'auto' },
    name: { color: '#171A1F', marginTop: 2 },
});
