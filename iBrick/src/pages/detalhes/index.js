import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import Avatar from '../../assets/imgs/bricks.png'


const Detalhes = ({route, navigation}) => {

    const { item } = route.params
    return (
        <View>
            <Image style={Styles.image} source={Avatar}/>
            <View>
                <Text style={Styles.name}>{item.name}</Text>
                <Text style={Styles.description}>{item.descricao}</Text>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    image: {
        width: '100%',
        marginTop: 5
    },
    name: {
        fontSize: 24,
        color: '#000',
        fontWeight: "400",
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontSize: 16,
        textAlign: 'center'
    }
})

export default Detalhes;