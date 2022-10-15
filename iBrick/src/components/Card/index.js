import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import Lojas from '../../assets/lojas.json';
import Brick from '../../assets/imgs/material.png';

const LojasFeed = Lojas;

const CardComponent = props => {
  return (
    <FlatList
      data={LojasFeed.feeds}
      numColumns={2}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={Styles.card}>
            <View >
              <Image style={Styles.image} source={Brick} />
              <View style={Styles.contentView}>
                <View style={Styles.viewInfo}>
                  <Text style={Styles.text}>{item.name}</Text>
                  <View style={Styles.viewIcon}>
                    <Icon name="star" color="#ECAD0C" />
                    <Text>{item.avaliation}</Text>
                  </View>
                </View>
                <View style={Styles.viewInfo}>
                  <Text>{item.price}</Text>
                  <View style={Styles.viewIcon}>
                    <Icon name="timer" color="#000" />
                    <Text>{item.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '47%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 200,
  },
  contentView: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {},
  text: {
    color: '#000',
  },
});

export default CardComponent;
