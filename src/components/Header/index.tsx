import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ArrowLeft,
  BorderlessButtonStyled,
  Title,
  WrapperAction,
} from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

const Header: React.FC<Props> = ({ title, action }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BorderlessButtonStyled onPress={handleGoBack}>
        <ArrowLeft />
      </BorderlessButtonStyled>

      <Title>{title}</Title>

      {action && <WrapperAction>{action}</WrapperAction>}
    </Container>
  );
};

export default Header;
