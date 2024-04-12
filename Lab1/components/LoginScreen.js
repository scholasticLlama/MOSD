import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'
import { BackHandler } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Main")
      }
    })

    return unsubscribe;
  }, [])

  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Return true to prevent default back behavior
      return true;
    });
  
    return () => backHandler.remove();
  }, []);

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Log in with ', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutLine]}>
          <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
     marginTop: 5
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#C0C0C0',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutLine: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderColor: '#C0C0C0',
    borderWidth: 2
  },
  buttonOutLineText: {
    color: '#C0C0C0',
    fontWeight: '700',
    fontSize: 16
  },
});


export default LoginScreen;