import React from 'react';

import { Wrapper, Text, Image, Container } from './styles';
import DiscordImg from '../../assets/discord.png';

const ButtonIcon: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Image source={DiscordImg} />
      </Wrapper>
      <Text>Entrar com Discord</Text>
    </Container>
  );
};

export default ButtonIcon;
