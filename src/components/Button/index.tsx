import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Text, Container } from './styles';

type Props = RectButtonProps & {
  title: string;
};

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};

export { Button };
