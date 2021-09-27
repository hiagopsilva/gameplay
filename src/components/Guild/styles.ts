import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts } from '../../global/styles/theme';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title700};
  font-size: 18px;
  color: ${colors.highlight};
  margin-bottom: 4px;
`;

export const Type = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.highlight};
  font-size: 13px;
`;

export const IconRight = styled(Feather).attrs({
  name: 'chevron-right',
  color: colors.heading,
  size: 24,
})``;
