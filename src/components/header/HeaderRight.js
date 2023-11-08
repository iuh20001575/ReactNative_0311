import { Image, Pressable, StyleSheet } from 'react-native';

function HeaderRight() {
    return (
        <Pressable style={styles.button}>
            <Image
                style={styles.image}
                source={require('../../../assets/ic_outline-search.png')}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 24,
        marginRight: 40,
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default HeaderRight;
