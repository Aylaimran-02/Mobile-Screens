import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.text}>
        We are a small company dedicated to providing the best services for
        our customers. Our mission is to make your experience seamless and
        enjoyable.
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
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
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AboutUsScreen;
