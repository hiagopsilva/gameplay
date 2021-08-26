import React from 'react';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import { Wrapper, Content, Image, Title, SubTitle } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <Wrapper>
      <Image source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se {'\n'} e organize suas {'\n'}
          jogatinas
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </SubTitle>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </Content>
    </Wrapper>
  );
};

export { SignIn };
