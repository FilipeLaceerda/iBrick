import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.component}>
      <Text style={styles.text}>Hello, IBrick</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={text}
        onChangeText={newText => setText(newText)}
      />
      <TextInput style={styles.input} placeholder="Senha" />
      <Button style={styles.button} title="Login" onPress="" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'white',
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
});

export default Login;
