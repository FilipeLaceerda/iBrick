import React from 'react';
import { StyleSheet,  View } from 'react-native';
import CardComponent from '../../components/Card';


const FeedIBrick = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <CardComponent navigation={navigation}></CardComponent>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
});

export default FeedIBrick;
