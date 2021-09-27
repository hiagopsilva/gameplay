import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { ScrollView } from 'react-native';
import { colors, fonts } from '../../global/styles/theme';

type LabelProps = {
  customLabel?: boolean;
};

type FieldProps = {
  secondaryField?: boolean;
};

export const Form = styled.View`
  padding-horizontal: 24px;
  margin-top: 32px;
`;

export const Select = styled.View`
  width: 100%;
  flex-direction: row;
  height: 68px;
  border-color: ${colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;

export const IconArrowRight = styled(Feather).attrs({
  name: 'chevron-right',
  size: 18,
  color: colors.heading,
})``;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
  margin: ${({ customLabel }: LabelProps) =>
    customLabel ? '36px 0 18px 24px' : '0'};
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: ${({ secondaryField }: FieldProps) =>
    secondaryField ? '12px' : 0};
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 18px;
  font-family: ${fonts.text400};
  color: ${colors.heading};
`;

export const CaracteresLimit = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.highlight};
`;

export const ScrollViewStyled = styled(ScrollView)``;

export const Footer = styled.View`
  margin-vertical: 20px;
  margin-bottom: 56px;
`;
