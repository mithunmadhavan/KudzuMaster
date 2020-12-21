import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from '../../components/CustBtn'

class CountryTasteChecker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      countrySelected: '',
      tasteSelected: '',
    }
  }

  checkTaste = taste => {
    const { countrySelected } = this.state

    if (countrySelected == 'USA' && taste == 'Salty')
      return alert('40% Perple like Salty food in USA')
    else if (countrySelected == 'INDIA' && taste === 'Spicy')
      return alert('60% Perple like Spicy food in USA')
    else
      return alert('Taste not available')
  }

  render() {
    const { countrySelected } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Button label='INDIA' value='INDIA' onPress={selection => this.setState({ countrySelected: selection })} isSelected={countrySelected == 'INDIA'} />
          <Button label='USA' value='USA' onPress={selection => this.setState({ countrySelected: selection })} isSelected={countrySelected == 'USA'} />
        </View>

        <View style={styles.section}>
          <Button label='Spicy' onPress={() => this.checkTaste('Spicy')} />
          <Button label='Salty' onPress={() => this.checkTaste('Salty')} />
        </View>
      </View>
    );
  };
}

export default CountryTasteChecker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10
  }
})
