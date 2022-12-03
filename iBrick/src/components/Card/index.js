import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Brick from '../../assets/imgs/material.png';
import Star from '../../assets/imgs/star.png';
import Timer from '../../assets/imgs/Vector.png';
import Lojas from '../../assets/lojas.json';
import { feeds } from '../../services/api';

const data = Lojas;

const perPage = 4;

const CardComponent = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchText === '') {
      loadRepositories();
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
    if (loading) return null;
    return (
      <View style={Styles.loading}>
        <ActivityIndicator size='large' />
      </View>
    );
  };

 async function loadRepositories(){

  const response = await feeds.get('/').then(res => res.data);
  console.log(response);
  return response;
    /* setLoading(true);
    const response = data.feeds.slice(page, page + 3);
    setList([...list, ...response]);

    setPage(page + 3);
    setLoading(false); */
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
        onEndReached={() => loadRepositories()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={Styles.card}
              onPress={() => navigation.navigate('Detalhes', {item: item})}>
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
    width: "90%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0066CC',
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginVertical: 20
  }
});

export default CardComponent;
