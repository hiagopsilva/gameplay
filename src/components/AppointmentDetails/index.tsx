import React from 'react';
import Header from '../Header';

import {
  Container,
  WrapperAction,
  ShareIcon,
  Banner,
  Title,
  SubTitle,
  BannerContent,
} from './styles';
import ImgBanner from '../../assets/banner.png';

const AppointmentDetails: React.FC = () => {
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
    </Container>
  );
};

export default AppointmentDetails;
