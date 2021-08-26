import React from 'react';
import Profile from '../../components/Profile';

import { Wrapper, Header } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Profile />
      </Header>
    </Wrapper>
  );
};

export default Home;
