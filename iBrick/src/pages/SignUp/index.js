import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, TextInput, View, Text, Alert } from "react-native";
import { user } from "../../services/api";

const SignUp = ({ navigation }) => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

 async function signUp(){
    if(name === '' || email === '' || password === ''){
        alert('PRENCHA OS CAMPOS');
    } else {        
        const data = {
            name,
            email,
            password
        }

        console.log(data);
        
        const response = await user.post('/user', {data}).then(res => {
            if(res.status === 200){
                navigation.navigate('Login')
                console.log('Usuário criado com sucesso')
            }
        })
        console.log(response);
        
        return response;
    }
}
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cadastrar Usuário</Text>
            <TextInput placeholder="Nome" style={styles.textInput} value={name} onChangeText={setName}></TextInput>
            <TextInput placeholder="Email" keyboardType="email-address" autoCompleteType="email" value={email} onChangeText={setEmail} style={styles.textInput}></TextInput>
            <TextInput placeholder="Senha"  secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.textInput}></TextInput>
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

SignUp.navigationOptions = {
    title: 'Cadastro',
}

const styles = StyleSheet.create({
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
        backgroundColor: '#00BFFF'
    },
    buttonCancel: {
        marginTop: 20,
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "500",
        color: "#000"
    },
    textButton: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000"
    },
    textInput: {
        marginTop: 20,
        width: 250,
        height: 45,
        borderWidth: 1,
        borderColor: 'thistle',
    }
}) 

export default SignUp