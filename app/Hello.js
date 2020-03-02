import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput} from "react-native";
import UselessTextInput from "./src/components/TextInput";

export default class Hello extends Component {
    render() {
        return (
          <View style={styles.container}>
            <UselessTextInput />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
      padding: 20,
  },
  input: {
    height: 40,
    padding: 5,
    width: "100%",
    borderColor: "#333",
    borderWidth: 1
  }
});
