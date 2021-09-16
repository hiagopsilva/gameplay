import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import PlayerSVG from '../../assets/player.svg';
import CalendarSVG from '../../assets/calendar.svg';

import {
  Container,
  Wrapper,
  Content,
  Header,
  Title,
  Category,
  WrapperPlayerInfo,
  GuildIconStyled,
  TextPlayer,
  Footer,
  WrapperDateInfo,
  TextDate,
} from './styles';
import { colors } from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = colors;

  return (
    <Wrapper {...rest}>
      <Container>
        <GuildIconStyled />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>

            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <WrapperDateInfo>
              <CalendarSVG />

              <TextDate>{data.date}</TextDate>
            </WrapperDateInfo>

            <WrapperPlayerInfo>
              <PlayerSVG fill={owner ? primary : on} />

              <TextPlayer color={owner ? primary : on}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </TextPlayer>
            </WrapperPlayerInfo>
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export { Appointment };
