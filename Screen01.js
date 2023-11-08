import React from 'react';
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const stores = [
    require('./assets/Image.png'),
    require('./assets/Image (1).png'),
    require('./assets/Image (3).png'),
];

export default function Screen01({ navigation }) {
    const handleClick = () => {
        navigation.navigate('Screen02');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cafe world</Text>
            <FlatList
                style={styles.list}
                data={stores}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={item} />
                )}
                keyExtractor={(item, index) => index}
            />
            <View style={styles.wrapperButton}>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text style={styles.textButton}>GET STARTED</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    title: { fontSize: 24, fontWeight: 700, marginTop: 89 },
    image: { width: 200, height: 62, borderRadius: 6, marginTop: 42 },
    list: {
        flexGrow: 0,
    },
    wrapperButton: {
        marginTop: 150,
        paddingHorizontal: 40,
        width: '100%',
    },
    button: {
        padding: 14,
        backgroundColor: 'rgba(0, 189, 214, 1)',
        borderRadius: 6,
        width: '100%',
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        lineHeight: 22,
    },
});
