import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lojas from '../../assets/lojas.json';
import Brick from '../../assets/imgs/material.png';
import Star from '../../assets/imgs/star.png';
import Timer from '../../assets/imgs/Vector.png';

const data = Lojas;

const perPage = 4;

const CardComponent = navigation => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(data.feeds);

  useEffect(() => {
    if (searchText === '') {
      setList(data.feeds);
    } else {
      setList(
        data.feeds.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText])

  let renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  let loadRepositories = () => {
    const {proximaPagina, feeds} = this.state;
    const idInicial = proximaPagina * perPage + 1;
    const idFinal = idInicial + perPage - 1;
    const maisFeeds = LojasFeed.feeds.filter(
      feed => feed._id >= idInicial && feed._id <= idFinal,
    );
    if (maisFeeds.length) {
      this.setState({
        proximaPagina: proximaPagina + 1,
        feeds: [...feeds, ...maisFeeds],

        atualizando: false,
        carregando: false,
      });
    } else {
      this.setState({
        atualizando: false,
        carregando: false,
      });
    }
  };
  return (
    <>
      <View style={Styles.search}>
        <TextInput
          style={Styles.textInputStyle}
          value={searchText}
          onChangeText={(t) => setSearchText(t)}></TextInput>
      </View>
      <FlatList
        style={Styles.container}
        data={list}
        keyExtractor={item => item._id}
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={Styles.card}
              onPress={() => navigation.navigate('Detalhes')}>
              <View>
                <Image style={Styles.image} source={Brick} />
                <View style={Styles.contentView}>
                  <View style={Styles.viewInfo}>
                    <Text style={Styles.text}>{item.name}</Text>
                    <View style={Styles.viewIcon}>
                      <Image source={Star} />
                      <Text style={Styles.text}>{item.avaliation}</Text>
                    </View>
                  </View>
                  <View style={Styles.viewInfo}>
                    <Text style={Styles.text}>{item.price}</Text>
                    <View style={Styles.viewIcon}>
                      <Image style={Styles.icon} source={Timer} />
                      <Text style={Styles.text}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 70,
    marginTop: 20,
    marginBottom: 50
  },
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
    width: '80%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 200,
  },
  contentView: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 20
  },
  search: {
    flexDirection: 'row',
  },
  button: {
    height: 40,
  },
  textInputStyle: {
    width: 250,
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0066CC',
  },
});

export default CardComponent;
