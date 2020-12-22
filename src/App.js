import React from 'react'
import RootComponent from './components/RootComponent'

import 'react-native-gesture-handler';

// Daily progress
import CountryTasteChecker from './screens/Day3/CountryTasteChecker';
import FoodList from './screens/Day4/FoodList';
import Counter from './screens/Day5/Counter';

import AppRoutes from './config/routes'

export default function App() {
  return (
    <RootComponent>
      <AppRoutes />
    </RootComponent>
  )
}

