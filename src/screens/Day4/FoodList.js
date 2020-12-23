import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import FoodCard from '../../components/CustCards'
import Button from '../../components/CustBtn';

import services from '../../services'
import food_image from '../../assets/images/food_image.jpeg'

const foodData = []

export default class FoodList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foodList: foodData,
            isRefreshing: false,
            viewOrderConfirmation: false,
            foodPurchaseList: [],
        }
    }

    componentDidMount = () => {
        this.getFoodList()
    }

    getFoodList = () => {
        services.sampleApi.sampleApi()
            .then(response => {
                console.log(`res`, response)
                if(response && response.meals){
                    this.setState({
                        foodList: response.meals || []
                    })
                }
            }).catch(error => console.log(`error`, error))
    }

    _renderEmpty = () => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text> {'No list'} </Text>
        </View>
    )

    onSelect = (index, isSelected) => {
        let foodList = this.state.foodList
        foodList[index].isSelected = !isSelected

        var foodPurchaseList = []
        foodList.map(food => {
            if (food.isSelected) return foodPurchaseList.push(food)
        })

        this.setState({ foodList, foodPurchaseList })
    }

    onPurchase = () => {
        const { foodPurchaseList } = this.state
        this.props.navigation.navigate('OrderSummary', { foodPurchaseList })
    }

    render() {

        const { foodList, isRefreshing, viewOrderConfirmation, foodPurchaseList } = this.state

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={foodList}
                    keyExtractor={(item, index) => index}
                    onRefresh={() => this.getFoodList()}
                    refreshing={isRefreshing}
                    ListEmptyComponent={this._renderEmpty}
                    renderItem={({ item, index }) => <FoodCard image={food_image} name={item.strMeal} price={item.idMeal} onPress={() => this.onSelect(index, item.isSelected)} isSelected={item.isSelected} />}
                />
                <Button label={'Buy'} onPress={this.onPurchase} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    list: {
    }
})