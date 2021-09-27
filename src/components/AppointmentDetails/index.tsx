import React from 'react';
import { Header } from '../Header';

import {
  Container,
  WrapperAction,
  ShareIcon,
  Banner,
  Title,
  SubTitle,
  BannerContent,
  ListHeaderStyled,
  List,
  Footer,
} from './styles';
import ImgBanner from '../../assets/banner.png';
import Member from '../Member';
import { ListDivider } from '../ListDivider';
import { ButtonIcon } from '../ButtonIcon';

const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Hiago',
      avatar_url: 'https://github.com/hiagopsilva.png',
      status: 'offline',
    },
  ];
  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          <WrapperAction>
            <ShareIcon />
          </WrapperAction>
        }
      />

      <Banner source={ImgBanner}>
        <BannerContent>
          <Title>Lendários</Title>
          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida de md10
          </SubTitle>
        </BannerContent>
      </Banner>

      <ListHeaderStyled title="Jogadores" subtitle="total 3" />

      <List
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />

      <Footer>
        <ButtonIcon title="Entrar na partida" />
      </Footer>
    </Container>
  );
};

export default AppointmentDetails;
