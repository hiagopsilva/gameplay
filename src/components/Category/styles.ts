import styled from 'styled-components/native';
import { RectButton as RectButtonModules } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, fonts } from '../../global/styles/theme';

type Props = {
  checked?: boolean;
};

export const Container = styled(RectButtonModules)``;

export const WrapperGradient = styled(LinearGradient).attrs({
  colors: [colors.secondary50, colors.secondary70],
})`
  flex: 1;
  border-radius: 8px;
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled(LinearGradient).attrs((props: Props) => ({
  colors: [
    props.checked ? colors.secondary85 : colors.secondary50,
    colors.secondary40,
  ],
}))`
  opacity: ${(props: Props) => (props.checked ? 1 : 0.5)};
  width: 100px;
  height: 116px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title700};
  color: ${colors.heading};
  font-size: 15px;
  margin-top: 15px;
`;

export const Checked = styled.View`
  width: ${(props: Props) => (props.checked ? 12 : 14)}px;
  height: ${(props: Props) => (props.checked ? 12 : 14)}px;
  background-color: ${(props: Props) =>
    props.checked ? colors.primary : colors.secondary100};
  border-color: ${colors.secondary50};
  border-width: 2px;
  border-radius: ${(props: Props) => (props.checked ? 3 : 5)}px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Icon = styled(LinearGradient).attrs({
  colors: [colors.secondary50, colors.secondary70],
})`
  width: 48px;
  height: 48px;
`;
