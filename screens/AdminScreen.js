import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useUser } from '../screens/UserContext'; 

const AdminScreen = () => {
  const [newUserName, setNewUserName] = useState('');
  const { setUserName } = useUser();

  const handleChangeUserName = () => {
    setUserName(newUserName);
    Alert.alert("Success", "Username changed successfully");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrator Settings</Text>
      <Text style={styles.subtitle}>Change username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewUserName}
        value={newUserName}
        placeholder="Enter new user name"
      />
      <TouchableOpacity style={styles.button} onPress={handleChangeUserName}>
        <Text style={styles.buttonText}>Change User Name</Text>
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
    title: {
      fontSize: 24,
      fontFamily: 'PBold', 
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      fontFamily: 'PLight', 
      marginBottom: 20,
    },
    input: {
      width: '80%', 
      height: 50, 
      marginVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc', 
      borderRadius: 5, 
      fontFamily: 'PLight', 
      fontSize: 16, 
    },
    button: {
      backgroundColor: '#93bbff', 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20, 
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'PBold', 
    },
  });
  

export default AdminScreen;
