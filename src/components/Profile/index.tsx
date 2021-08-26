import React from 'react';
import { View } from 'react-native';
import Avatar from '../Avatar';

import { Container, WrapperUser, Greeting, Username, Message } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <View>
        <WrapperUser>
          <Greeting>Olá,</Greeting>
          <Username>Hiago</Username>
        </WrapperUser>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
};

export default Profile;
