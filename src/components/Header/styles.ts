import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.secondary100, colors.secondary40],
})`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  padding-horizontal: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BorderlessButtonStyled = styled(BorderlessButton)``;

export const ArrowLeft = styled(Feather).attrs({
  name: 'arrow-left',
  size: 24,
  color: colors.heading,
})``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.title700};
  font-size: 20px;
  color: ${colors.heading};
`;

export const WrapperAction = styled.View``;
