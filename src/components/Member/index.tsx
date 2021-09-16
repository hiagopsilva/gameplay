import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../Avatar';

import {
  Container,
  WrapperStatus,
  WrapperBulletStatus,
  TextNameStatus,
  Title,
} from './styles';

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

const Member: React.FC<Props> = ({ data }) => {
  const isOnline = data.status === 'online';

  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Title>{data.username}</Title>

        <WrapperStatus>
          <WrapperBulletStatus isOnline={isOnline} />
          <TextNameStatus>{isOnline ? 'Disponível' : 'Ocupado'}</TextNameStatus>
        </WrapperStatus>
      </View>
    </Container>
  );
};

export default Member;
