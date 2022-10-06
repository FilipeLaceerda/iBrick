import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const FeedIBrick = () => {
  return (
    <View style={Styles.container}>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
  },
});

export default FeedIBrick;
