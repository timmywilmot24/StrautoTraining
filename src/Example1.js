import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Example1() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Example 1 - Simple States</Text>
      <Text style={styles.text}>All code is in src/Example1.js</Text>
      <Text style={styles.text}>
        We have a simple state we want to track: count. Take a look at the line
        that we define count in. Do you notice that we also defined a setCount
        function? This is the only way to modify count internally, and when
        count is modified, it will rerender the page.
      </Text>
      <Text style={styles.text}>
        Let's take a look at the counter below. To render count, we simply need
        to call count in a React Native Text field. Check out the code to see it
        directly implemented. When we want to change count, we use setCount(val)
        where val is what we want to set it to. For instance, setCount(5) would
        give us 5 when we grab the value of count by calling count.
      </Text>
      <View style={styles.countGroup}>
        <Button title="Decrease" onPress={() => setCount(count - 1)}></Button>
        <Text style={styles.countText}>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
  },

  text: {
    fontSize: 16,
    paddingVertical: 10,
  },

  countText: {
    fontSize: 16,
    paddingVertical: 10,
  },

  countGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 10,
  },
});
