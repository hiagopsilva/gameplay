import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Background } from '../Background';
import { Header } from '../Header';
import { CategorySelect } from '../CategorySelect';
import { GuildIcon } from '../GuildIcon';
import { SmallInput } from '../SmallInput';
import { Button } from '../Button';

import {
  Form,
  Label,
  Image,
  Field,
  IconArrowRight,
  Select,
  SelectBody,
  Column,
  Divider,
  CaracteresLimit,
  ScrollViewStyled,
  Footer,
} from './styles';
import { TextArea } from '../TextArea';

const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollViewStyled>
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

          <Field>
            <View>
              <Label>Dia e mês</Label>

              <Column>
                <SmallInput maxLength={2} />
                <Divider>/</Divider>
                <SmallInput maxLength={2} />
              </Column>
            </View>
            <View>
              <Label>Hora e minuto</Label>

              <Column>
                <SmallInput maxLength={2} />
                <Divider>:</Divider>
                <SmallInput maxLength={2} />
              </Column>
            </View>
          </Field>

          <Field secondaryField>
            <Label>Descrição</Label>

            <CaracteresLimit>Max de 100 caracteres</CaracteresLimit>
          </Field>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <Footer>
            <Button title="Agendar" />
          </Footer>
        </Form>
      </ScrollViewStyled>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
