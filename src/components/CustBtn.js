import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default CustBtn = props => {
    const { label, onPress, isSelected, value } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress(value)} style={isSelected ? styles.selectedBtn : styles.deSelectedBtn}>
                <Text style={styles.txt}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    txt: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    selectedBtn: {
        borderRadius: 10,
        borderWidth: 3
    },
    deSelectedBtn: {
        borderRadius: 10,
        borderWidth: 1
    }
})
