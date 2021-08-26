import React from 'react';

import { Container, LinearGradient, Image } from './styles';
import Logo from '../../assets/banner.png';

type Props = {
  urlImage?: string;
};

const Avatar: React.FC<Props> = urlImage => {
  return (
    <Container>
      <LinearGradient>
        <Image source={Logo} />
      </LinearGradient>
    </Container>
  );
};

export { Avatar };
