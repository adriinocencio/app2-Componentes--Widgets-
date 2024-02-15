// Body.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Corpo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 18,
  },
});

export default Body;