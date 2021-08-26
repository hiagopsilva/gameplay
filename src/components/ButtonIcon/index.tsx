import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Wrapper, Text, Image, Container } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProps & {
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

export { ButtonIcon };
