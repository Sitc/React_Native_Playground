import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";

export default function UselessTextInput() {
    const [value, onChangeText] = React.useState();
    let tip = 0.00
    value > 0 ? tip = parseFloat(value) * 0.2 : 0 
    return (
        <TextInput
          style={{ height: 40, width: '100%', borderColor: "gray", borderWidth: 1 }}
          keyboardType='numeric'
          placeholder="0.00"
          onChangeText={text => onChangeText(text)}
          value={value}
        />
    );
}
