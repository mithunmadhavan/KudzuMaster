import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './components/CustBtn'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      countrySelected: '',
      tasteSelected: '',
    }
  }

  checkTaste = taste => {
    const { countrySelected } = this.state

    if (countrySelected == 'USA') {
      if (taste == 'Salty')
        return alert('Taste available')
      else
        return alert('Taste not available')
    } else if (countrySelected == 'INDIA') {
      if (taste === 'Spicy')
        return alert('Taste available')
      else
        return alert('Taste not available')
    }
  }

  render() {
    const { countrySelected } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <Button label='INDIA' value='INDIA' onPress={selection => this.setState({ countrySelected: selection })} isSelected={countrySelected == 'INDIA'} />
          <Button label='USA' value='USA' onPress={selection => this.setState({ countrySelected: selection })} isSelected={countrySelected == 'USA'} />
        </View>

        <View style={styles.section}>
          <Button label='Spicy' onPress={() => this.checkTaste('Spicy')} />
          <Button label='Salty' onPress={() => this.checkTaste('Salty')} />
        </View>



      </SafeAreaView>
    );
  };
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10
  }
})
