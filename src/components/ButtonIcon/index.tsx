import React from 'react';

import { Wrapper, Text, Image, Container } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = {
  title: string;
};

const ButtonIcon: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Image source={DiscordImg} />
      </Wrapper>
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonIcon;
