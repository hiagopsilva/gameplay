import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { View } from 'react-native';
import { Background } from '../Background';
import { Header } from '../Header';
import { CategorySelect } from '../CategorySelect';
import { GuildIcon } from '../GuildIcon';

import {
  Form,
  Label,
  Image,
  IconArrowRight,
  Select,
  SelectBody,
} from './styles';

const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header title="Agendar partida" />

      <Label customLabel>Categoria</Label>
      <View>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
      </View>

      <Form>
        <RectButton>
          <Select>
            {
              // <Image />
              <GuildIcon />
            }

            <SelectBody>
              <Label>Selecione um servidor</Label>
            </SelectBody>

            <IconArrowRight />
          </Select>
        </RectButton>
      </Form>
    </Background>
  );
};

export default AppointmentCreate;
