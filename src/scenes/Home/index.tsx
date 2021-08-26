import React, { useState } from 'react';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../CategorySelect';

import { Wrapper, Header, WrapperCategorySelect } from './styles';

const Home: React.FC = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return (
    <Wrapper>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <WrapperCategorySelect>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </WrapperCategorySelect>
    </Wrapper>
  );
};

export { Home };
