import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../../components/CustBtn';

export default class FoodPurchased extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foodPurchaseList: []
        }
    }

    componentDidMount = () => {
        const { foodPurchaseList = [] } = this.props.route.params
        this.setState({ foodPurchaseList })
    }

    render() {
        const { foodPurchaseList } = this.state
        return (
            <View style={styles.container}>
                    <Text style={styles.headerTxt}> Order Confirmed!!! </Text>
                    <View style={{flex: 1}}>
                        {foodPurchaseList.map(food => (
                            <View style={styles.list}>
                                <Text style={styles.txt}>{food.strMeal.substring(0, 20)}</Text>
                                <Text style={styles.txt}>{food.idMeal}</Text>
                            </View>
                        ))}
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerTxt: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    txt: {
    }
})
