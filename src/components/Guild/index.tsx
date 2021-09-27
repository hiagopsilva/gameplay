import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { GuildIcon } from '../GuildIcon';

import { Container, Content, Title, Type, IconRight } from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

const Guild: React.FC<Props> = ({ data, ...rest }: Props) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <Content>
        <View>
          <Title>{data.name}</Title>

          <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
        </View>
      </Content>
      <IconRight />
    </Container>
  );
};

export { Guild };
