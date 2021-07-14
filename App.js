import React, { useState } from 'react';
import { TextInput, View, Picker, Button } from 'react-native';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [selectedValue, setSelectedValue] = useState("+");

  const calculate = () => {
    alert(parseFloat(a)+parseFloat(b))
  }

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, borderColor:"#000000", borderWidth:1}}
        placeholder="Enter Number"
        onChangeText={text => setA(text)}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="+" value="plus" />
        <Picker.Item label="-" value="minus" />
        <Picker.Item label="x" value="multiple" />
        <Picker.Item label="/" value="divide" />
      </Picker>
      <TextInput
        style={{height: 40, borderColor:"#000000", borderWidth:1}}
        placeholder="Enter Number"
        onChangeText={text => setB(text)}
        keyboardType="numeric"
      />
      <View style={{height: 10}}/>
      <Button title="calculate" onPress={ calculate } />
    </View>
  );
}

export default Calculator;