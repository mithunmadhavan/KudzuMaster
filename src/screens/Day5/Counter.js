import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from '../../components/CustBtn'

export default function Counter() {


    const [count, setCount] = useState(0)

    const add = () => setCount(count + 1)
    const reduce = () => setCount(count - 1)

    return (
        <View style={styles.container}>
            <Button label={'INC'} onPress={add} style={styles.section}/>
            <Text style={[styles.section, {fontSize: 60}]}>{count}</Text>
            <Button label={'DEC'} onPress={reduce} style={styles.section} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
         alignItems: 'center'
    },
    section:{
        marginVertical: 10
    }
})
