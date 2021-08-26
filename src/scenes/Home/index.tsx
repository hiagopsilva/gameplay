import React from 'react';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { Wrapper, Header } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
    </Wrapper>
  );
};

export { Home };
