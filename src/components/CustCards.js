import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const FoodCard = props => {

    const { image, name, taste, price, isSelected, onPress, item, index } = props
    return (
        <TouchableOpacity
            style={[styles.container, isSelected ? styles.containerSelected : styles.containerDeselected]}
            onPress={() => onPress ? onPress(item, index) : null}
        >
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={image} ImageResizeMode='contain' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.txtMain}>{name}</Text>
                <Text style={styles.txtMain}>{'Taste: '}
                    <Text style={{ fontWeight: '300' }}> {taste} </Text>
                </Text>
                <Text style={styles.txtMain}>{'Price: '}
                    <Text style={{ fontWeight: '300' }}> {price} </Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
    },
    containerSelected: {
        borderWidth: 1,
        borderRadius: 10
    },
    containerDeselected: {
    },
    imgContainer: {
        flex: 1,
        borderWidth: 0.5,
        borderRadius: 6,
        marginRight: 10,
        height: 100,
        width: 100,
        padding: 5,
    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 2,
    },
    txtMain: {
        fontWeight: '700',
    }
})