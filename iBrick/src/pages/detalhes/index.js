import React, {useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {details} from '../../services/api';

import Avatar from '../../assets/imgs/bricks.png';
import Star from '../../assets/imgs/star.png';

const Detalhes = ({route, navigation}) => {
  const [detail, setDetail] = useState({});
  const {item} = route.params;

  useEffect(() => {
    loadDetails(item.id);
  });

  async function loadDetails(id) {
    const response = await details
      .get(`/${id}`)
      .then(res => {
        setDetail(res.data);
      })
      .catch(error => console.log(error));
  }

  return (
    <View>
      <Image style={Styles.image} source={Avatar} />
      <View>
        <Text style={Styles.name}>{item.name}</Text>
        <Text style={Styles.description}>{detail.descricao}</Text>
      </View>
      <View style={Styles.contentInfo}>
        <Text style={Styles.text}>{detail.endereco}</Text>
        <Text style={Styles.text}>{detail.tel}</Text>
        <View style={Styles.avaliation}>
          <Image source={Star} />
          <Text style={Styles.text}>{item.avaliation}</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  image: {
    width: '100%',
    marginTop: 5,
  },
  name: {
    fontSize: 24,
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  avaliation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default Detalhes;
