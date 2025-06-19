// import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TripNest</Text>
       <Text style={styles.description}>
        <Text style={{ fontWeight: 'bold' }}>
          Escape. Explore. Experience.
        </Text>
        {"\n"}
        TravelBuddy’s got you!🌍
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', // soft blue
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  logo: {
    fontSize: 64,
    marginBottom: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#004aad',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#555',
  },
  button: {
    backgroundColor: '#004aad',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    color: '#777',
  },
  login: {
    color: '#004aad',
    fontWeight: 'bold',
  },
});