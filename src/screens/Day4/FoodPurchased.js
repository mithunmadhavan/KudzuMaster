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
                <View>
                    <Text style={styles.headerTxt}> Order Confirmed!!! </Text>
                    <View>
                        {foodPurchaseList.map(food => (
                            <View style={styles.list}>
                                <Text >{food.name}</Text>
                                <Text >{food.price}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerTxt: {
        fontSize: 20,
        marginVertical: 20,
    },
    listContainer: {
        marginHorizontal: 20,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn: {
        position: 'absolute',
        bottom: 0,
        width: '80%'
    }
})
