import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Wrapper, Text, Image, Container } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
};

const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Wrapper>
        <Image source={DiscordImg} />
      </Wrapper>
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonIcon;
