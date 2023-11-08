import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';

export default function Drink({ item }) {
    return (
        <View key={item.title} style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceGroup}>
                    <Image
                        style={styles.playImage}
                        source={require('../../../assets/Frame.png')}
                    />
                    <Text style={styles.desc}>${item.price}</Text>
                </View>
            </View>
            <View style={styles.btns}>
                <Pressable
                    onPress={() => handleMinus(item)}
                    style={styles.btnIcon}
                >
                    <Image
                        style={styles.iconImage}
                        source={require('../../../assets/minus.png')}
                    />
                </Pressable>
                <Pressable
                    onPress={() => handleAdd(item)}
                    style={styles.btnIcon}
                >
                    <Image
                        style={styles.iconImage}
                        source={require('../../../assets/plus.png')}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        flexDirection: 'row',
        gap: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(188, 193, 202, 1)',
    },
    image: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 4,
    },
    info: { marginTop: 6, flex: 1 },
    priceGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    title: { fontSize: 16, fontWeight: 500, lineHeight: 26 },
    playImage: {
        width: 12,
        aspectRatio: 1,
    },
    desc: {
        fontSize: 12,
        lineHeight: 20,
        color: 'rgba(144, 149, 160, 1)',
    },
    iconImage: {
        width: 20,
        aspectRatio: 1,
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16,
        gap: 42,
    },
    btnIcon: { width: 20, aspectRatio: 1 },
});
