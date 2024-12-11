import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our App</Text>
      <Text style={styles.description}>
        This is the home screen where you can find general information.
      </Text>
      <Button
        title="Go to About Us"
        onPress={() => navigation.navigate('About Us')}
      />
      <Button
        title="Go to Contact Us"
        onPress={() => navigation.navigate('Contact Us')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
