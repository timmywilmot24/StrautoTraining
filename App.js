import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Example1 from "./src/Example1";
import Example2 from "./src/Example2";

export default function App() {
  const [example, setExample] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>React Native - State and Props</Text>
      {example === 1 ? (
        <Example1 setExample={setExample}></Example1>
      ) : example === 2 ? (
        <Example2 setExample={setExample}></Example2>
      ) : (
        <Example3 setExample={setExample}></Example3>
      )}
      <View style={styles.buttonGroup}>
        <Button title="Example 1" onPress={() => setExample(1)}></Button>
        <Button title="Example 2" onPress={() => setExample(2)}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  header: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 20,
    textAlign: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
  },
});
