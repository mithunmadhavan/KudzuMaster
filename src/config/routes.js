import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Day5/Login'
import FoodList from '../screens/Day4/FoodList'
import FoodPurchased from '../screens/Day4/FoodPurchased'

const Stack = createStackNavigator();

const AppNavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={FoodList} options={{ title: 'Food menu' }} />
                <Stack.Screen name="OrderSummary" component={FoodPurchased} options={{ title: 'Order Confirmation' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigations;