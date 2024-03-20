import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.navigate('Admin'); // Navigate to the Home screen
    } else {
      // Show an alert if username or password is incorrect
      Alert.alert("Login Failed", "Wrong username and Password - This is for Administrator use only.", [{ text: "Try Again" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="lock-closed" size={50} style={styles.iconStyle} />
      <Text style={styles.adminText}>Administrator Logins</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter Username"
        placeholderTextColor="gray"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        placeholderTextColor="gray"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  iconStyle: {
    marginBottom: 20,
  },
  adminText: {
    fontSize: 22,
    fontFamily: 'PBold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    borderColor: '#ccc',
    fontFamily: 'PLight',
  },
  loginButton: {
    backgroundColor: '#93bbff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'PBold',
  },
});

export default SettingsScreen;
