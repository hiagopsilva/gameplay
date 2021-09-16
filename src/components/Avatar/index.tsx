import React from 'react';

import { Container, LinearGradient, Image } from './styles';

type Props = {
  urlImage: string;
};

const Avatar: React.FC<Props> = ({ urlImage }) => {
  return (
    <Container>
      <LinearGradient>
        <Image source={{ uri: urlImage }} />
      </LinearGradient>
    </Container>
  );
};

export { Avatar };
