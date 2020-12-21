import React from 'react'
import RootComponent from './components/RootComponent'

// Daily progress
import CountryTasteChecker from './screens/Day3/CountryTasteChecker';
import FoodList from './screens/Day4/FoodList';
import Counter from './screens/Day5/Counter';

export default function App() {
  return (
    <RootComponent>
      <Counter />
    </RootComponent>
  )
}

