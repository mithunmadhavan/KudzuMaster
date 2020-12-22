import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default CustBtn = props => {
    const { label, onPress, isSelected, value, containerStyle, btnStyle, txtStyle } = props
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                onPress={() => onPress ? onPress(value) : null}
                style={[styles.btn, (isSelected ? styles.selectedBtn : styles.deSelectedBtn), btnStyle]}
            >
                <Text style={[styles.txt, txtStyle]}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderRadius: 10,
    },
    txt: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    btn:{
        borderRadius: 10,
        alignItems: 'center'
    },
    selectedBtn: {
        borderWidth: 3
    },
    deSelectedBtn: {
        borderWidth: 1
    }
})
