import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Example2() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Example 2 - Simple Props</Text>
      <Text style={styles.text}>All code is in src/Example2.js</Text>
      <Text style={styles.text}>
        Lets suppose our parent acts just like Example1, with a counter.
        However, we have a child, that we want to also track this information.
        The way to do this is through props. We will pass our count state as a
        property down to our child: Example2Child. Then, our child will be able
        to receive this as a property and call it from inside its component via
        props.count. The parent component will be yellow and the child component
        will be blue to easily see the distinction.
      </Text>
      <View style={styles.parentContainer}>
        <View style={styles.countGroup}>
          <Button title="Decrease" onPress={() => setCount(count - 1)}></Button>
          <Text style={styles.countText}>Parent Counter: {count}</Text>
          <Button title="Increase" onPress={() => setCount(count + 1)}></Button>
        </View>
        {/* Note the count being passed into Example2Child below */}
        <Example2Child count={count}></Example2Child>
      </View>
    </View>
  );
}

// Note the props being received below
const Example2Child = (props) => {
  return (
    <View style={styles.childContainer}>
      <Text style={styles.text}>Child Counter: {props.count}</Text>
    </View>
  );
};

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
    fontSize: 18,
    paddingVertical: 10,
  },

  countGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },

  parentContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "yellow",
  },

  childContainer: {
    padding: 20,
    backgroundColor: "aqua",
    alignItems: "center",
  },
});
