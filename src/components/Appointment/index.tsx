import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';

import { Container, Wrapper } from './styles';

export type GuildProps = {};

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
  return (
    <Container {...rest}>
      <Wrapper>
        <GuildIcon />
      </Wrapper>
    </Container>
  );
};

export { Appointment };
