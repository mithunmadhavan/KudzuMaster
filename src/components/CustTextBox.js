import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'


export default function CustTextBox(props) {

    const { value, onChangeText, comtainerStyle, txtBox, placeholder, caretHidden = true } = props
    return (
        <View style={[styles.container, comtainerStyle]}>
            <TextInput
                styles={[styles.txtBox, txtBox]}
                onChangeText={value => onChangeText ? onChangeText(value) : null}
                value={value}
                placeholder={placeholder}
                caretHidden={caretHidden}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    txtBox: {

    }
})
