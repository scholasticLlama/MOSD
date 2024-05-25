import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'
import { BackHandler } from 'react-native';

const LoginScreen = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accountState, setAccountState] = useState(1);
  const contentElems = [
    {headerText: 'Create an account', buttonText: 'Register', buttonStyle: [styles.button, styles.buttonOutLine], textStyle: styles.buttonOutLineText, changeText: 'Already have an account?'},
    {headerText: 'Sign in', buttonText: 'Sign in', buttonStyle: styles.button, textStyle: styles.buttonText, changeText: 'New to here? Create an account'},
  ];

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
      return true;
    });
  
    return () => backHandler.remove();
  }, []);

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
      setEmailError('');
      setPasswordError('');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        setEmailError('That email address is already in use!');
      } else {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setEmailError('That email address is invalid!');
        } else {
          if (error.code === 'auth/missing-email') {
            console.log('Enter an email.');
            setEmailError('Enter an email.');
          } else {
            setEmailError('');
          }
        }
      }


      if (error.code === 'auth/weak-password') {
        console.log('The password is too weak.');
        setPasswordError('The password is too weak.');
      } else if (error.code === 'auth/missing-password') {
        console.log('Enter a password.');
        setPasswordError('Enter the password.');
      } else {
        setPasswordError('');
      }

      alert(error.message);
      setLoginError('')
    })
  }

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Log in with ', user.email);
    })
    .catch(error => {
      setEmailError('');
      setPasswordError('');
      console.log('Incorrect email or password.');
      setLoginError('Incorrect email or password.');
    })
  }
  console.log("2%2 = ", 2%2, "1%2 = ", 1%2);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>froggy voyage</Text>
      
      <View style={styles.main}>
        <View style={styles.inputContainer}>     
          <Image style={styles.imageHandler} source={require('../assets/images/login.jpg')}/>
          <Text style={styles.header}>{contentElems[accountState].headerText}</Text>
          <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)}
            style={[styles.input, { borderColor: (emailError == '' && loginError == '') ? '#F5F5F5' : '#C11B17' }]} />
          <Text style={{ fontSize: 10, color: '#C11B17', textAlign: 'left', width: '100%' }}>{emailError}</Text>
          <TextInput onChangeText={text => setPassword(text)} value={password} placeholder="Password" secureTextEntry
            style={[styles.input, { borderColor: (passwordError == '' && loginError == '') ? '#F5F5F5' : '#C11B17' }]} />
          <Text style={{ fontSize: 10, color: '#C11B17', textAlign: 'left', width: '100%' }}>{passwordError}</Text>
          <Text style={{ fontSize: 10, color: '#C11B17' }}>{loginError}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={accountState ? handleSignUp : handleLogin} style={contentElems[accountState].buttonStyle}>
            <Text style={contentElems[accountState].textStyle}>{contentElems[accountState].buttonText}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setAccountState((accountState + 1) % 2)} style={{ width: '100%' }}>
            <Text  
            style={{ fontSize: 15, color: '#91a820', textAlign: 'right', width: '100%', marginTop: 10, textDecorationLine: 'underline' }}>
              {contentElems[accountState].changeText}</Text>
          </TouchableOpacity>

          
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  title: {
    color: '#adc926',
    fontWeight: 'bold',
    marginTop: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 15
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 90
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    width: '100%',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#000',
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
    borderColor: '#000',
    borderWidth: 2
  },
  buttonOutLineText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16
  },
  imageHandler: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 150,
    borderColor: '#000',
    borderWidth: 0,
    marginTop: 30
  }
});


export default LoginScreen;