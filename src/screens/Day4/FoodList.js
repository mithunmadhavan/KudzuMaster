import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import FoodCard from '../../components/CustCards'
import Button from '../../components/CustBtn';
import FoodPurchased from './FoodPurchased';

import food_image from '../../assets/images/food_image.jpeg'

const foodData = [
    { id: 1, name: 'Food 1', price: '200', taste: 'Salty', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb' },
    { id: 2, name: 'Food 2', price: '100', taste: 'Spicy', image: 'https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085,x_0,y_0/v1583843120/DCUK/Content/Surprisingly-High-Carb-Food.png' },
    { id: 3, name: 'Food 3', price: '500', taste: 'Sweet', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb' },
    { id: 4, name: 'Food 4', price: '400', taste: 'Spicy', image: 'https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085,x_0,y_0/v1583843120/DCUK/Content/Surprisingly-High-Carb-Food.png' },
    { id: 5, name: 'Food 5', price: '150', taste: 'Sweet', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb' },
]

export default class FoodList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foodList: [],
            isRefreshing: false,
            viewOrderConfirmation: false,
            foodPurchaseList: [],
        }
    }

    _renderEmpty = () => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text> {'No list'} </Text>
        </View>
    )

    _getData = () => {
        this.setState({ isRefreshing: false, foodList: foodData })
    }

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
                    onRefresh={() => this._getData()}
                    refreshing={isRefreshing}
                    ListEmptyComponent={this._renderEmpty}
                    renderItem={({ item, index }) => <FoodCard image={food_image} name={item.name} taste={item.taste} price={item.price} onPress={() => this.onSelect(index, item.isSelected)} isSelected={item.isSelected} />}
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