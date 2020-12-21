import React from 'react'
import RootComponent from './components/RootComponent'

// Daily progress
import CountryTasteChecker from './screens/Day3/CountryTasteChecker'
import FoodList from './screens/Day4/FoodList'

export default function App() {
  return (
    <RootComponent>
      <FoodList />
    </RootComponent>
  )
}

