import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { colors, fonts } from '../../global/styles/theme';

type LabelProps = {
  customLabel: boolean;
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
