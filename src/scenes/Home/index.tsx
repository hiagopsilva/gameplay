import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../../components/Appointment';

import { ButtonAdd } from '../../components/ButtonAdd';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';

import {
  Wrapper,
  Header,
  WrapperCategorySelect,
  Content,
  List,
} from './styles';

const Home: React.FC = () => {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uam partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uam partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uam partida da md10',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uam partida da md10',
    },
  ];

  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails');
  };
  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate');
  };

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return (
    <Wrapper>
      <Header>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </Header>

      <WrapperCategorySelect>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="total 6" />

          <List
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </Content>
      </WrapperCategorySelect>
    </Wrapper>
  );
};

export { Home };
