import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/imgs/Logo.png';
import {user} from '../../services/api';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [boolean, setBoolean] = useState('');
  const login = 'Login';
  const cadastrar = 'Cadastrar Usuário';

  async function loginRegister() {
    console.log('teste branch')
    if(email === '' || password === ''){
      Alert('Campos Obrigatorios');
    }else {
      const response = await user.get(`/user/${email}`).then(res => {
        setBoolean(true);
      });
      if (boolean === true) {
        navigation.navigate('FeedIBrick');
      } else {
        Alert('Esse email ainda não foi cadastrado.');
      }
    }
  }
  return (
    <View style={styles.component}>
      <Image source={Logo} />
      <Text style={styles.text}>IBrick</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={email}
        onChangeText={newText => setEmail(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        defaultValue={password}
        onChangeText={newText => setPassword(newText)}
      />
      <TouchableOpacity
        style={styles.button}
        title="Login"
        onPress={loginRegister}>
        <Text style={styles.textPress}>{login}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        title="Cadastrar Usuário"
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textPress}>{cadastrar}</Text>
      </TouchableOpacity>
    </View>
  );
};

Login.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  textPress: {
    fontSize: 20,
    color: '#fff',
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
    backgroundColor: '#9400D3',
  },
});

export default Login;
