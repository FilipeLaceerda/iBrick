import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const Card = (props) => {
    return(
        <Card>
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.subtitle}</Paragraph>
        </Card.Content>
        <Card.Cover source={props.src} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    )
}

export default Card;