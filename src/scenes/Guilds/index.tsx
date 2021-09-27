import React from 'react';
import { FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { Container } from './styles';

type Props = {
  handleGuildsSelect: (guild: GuildProps) => void;
};

const Guilds: React.FC<Props> = ({ handleGuildsSelect }) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
  ];
  return (
    <Container>
      <FlatList
        style={{ width: '100%' }}
        data={guilds}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildsSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Container>
  );
};

export { Guilds };
