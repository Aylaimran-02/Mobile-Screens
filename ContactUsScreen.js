import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ContactUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.text}>
        You can reach us through email or call us at the following numbers:
      </Text>
      <Text style={styles.contactInfo}>Email: support@example.com</Text>
      <Text style={styles.contactInfo}>Phone: (123) 456-7890</Text>
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
  contactInfo: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ContactUsScreen;
