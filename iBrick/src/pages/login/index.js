import React, { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/imgs/Logo.png';

const Login = ({ navigation }) => {
  const [text, setText] = useState('');
  const login = 'Login';
  const cadastrar = 'Cadastrar Usuário';
  return (
    <View style={styles.component}>
      <Image source={Logo} />
      <Text style={styles.text}>IBrick</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={text}
        onChangeText={newText => setText(newText)} />
      <TextInput style={styles.input} placeholder="Senha" />
      <TouchableOpacity style={styles.button}  title="Login" onPress={() => navigation.navigate('FeedIBrick')}> 
        <Text style={styles.textPress}>{login}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUp} title="Cadastrar Usuário" onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textPress}>{cadastrar}</Text>
      </TouchableOpacity>
    </View>
  );
};

Login.navigationOptions = {
  title: 'Login',
}

const styles = StyleSheet.create({
  textPress: {
    fontSize: 20,
    color: "#fff"
  },
  text: {
    fontSize: 50,
    color: 'black',
  },
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 20,
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: 'thistle',
  },
  button: {
    marginTop: 20,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#36498E',
  },
  signUp: {
    marginTop: 20,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9400D3'
  }
});

export default Login;
