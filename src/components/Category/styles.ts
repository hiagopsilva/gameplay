import styled from 'styled-components/native';
import { RectButton as RectButtonModules } from 'react-native-gesture-handler';
import { LinearGradient as LinearGradientModules } from 'expo-linear-gradient';

import { colors, fonts } from '../../global/styles/theme';

export const RectButton = styled(RectButtonModules)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const LinearGradient = styled(LinearGradientModules).attrs({
  colors: [colors.secondary50, colors.secondary70],
})`
  flex: 1;
  border-radius: 8px;
`;

export const Content = styled.View`
  opacity: ${props => (props.checked ? 1 : 0.4)};
  width: 100px;
  height: 116px;
  background-color: ${colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 7px;
`;

export const Checked = styled.View`
  /* opacity: ${props => (props.checked ? 1 : 0.4)}; */
  width: ${props => (props.checked ? 10 : 12)}px;
  height: ${props => (props.checked ? 10 : 12)}px;
  background-color: ${props =>
    props.checked ? colors.primary : colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${colors.secondary50};
  border-width: 2px;
  border-radius: 3px;
`;

export const Icon = styled(LinearGradientModules).attrs({
  colors: [colors.secondary50, colors.secondary70],
})`
  width: 48px;
  height: 48px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title500};
`;
