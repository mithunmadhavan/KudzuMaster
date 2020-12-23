import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'


import Button from '../../components/CustBtn'
import TextBox from '../../components/CustTextBox'

import config from '../../config'
import foodImage from '../../assets/images/food_image.jpeg'
import { ScrollView } from 'react-native-gesture-handler'
// require('../../assets/images/'
const deviceWidth = config.CONSTANTS.SCREEN_WIDTH;
const deviceHeight = config.CONSTANTS.SCREEN_HEIGHT;


export default function Login(props) {

    const [name, changeName] = useState('')
    const [password, changePassword] = useState('')

    const onLogin = () => {
        if (!name) return alert('No username')
        if (!password) return alert('No password')
        props.navigation.replace('Home', { username: name })
    }

    return (
        <View style={{flex:1}}>
            <ImageBackground
                style={{ width: deviceWidth, height: deviceHeight }}
                imageStyle={{ opacity: 0.7 }}
                resizeMode={'cover'} source={foodImage}
            >
                <View style={[styles.container, {flex: 0.4}]}>
                    <Text style={{fontSize: 35}}>LOGIN !!!</Text>
                </View>
                <View style={[styles.container, styles.formContainer]}>
                    <TextBox
                        onChangeText={value => changeName(value)}
                        value={name}
                        comtainerStyle={{ width: '80%' }}
                        placeholder={'name'}
                    />
                    <TextBox
                        onChangeText={value => changePassword(value)}
                        value={password}
                        comtainerStyle={{ width: '80%' }}
                        placeholder={'Password'}
                        caretHidden
                    />
                    <Button label={'Login'} onPress={onLogin} containerStyle={styles.btn} btnStyle={{ borderWidth: 0 }} txtStyle={{ fontSize: 20 }} />
                </View>
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '70%',
    },
    txtBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    formContainer:{
        backgroundColor: 'white',
        padding: 20,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,        
    }
})
