import React from 'react';

import IllustrationImg from '../../assets/illustration.png';
import { Wrapper, Content, Image, Title, SubTitle } from './styles';

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <Image source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>
      </Content>
    </Wrapper>
  );
};

export { SignIn };
