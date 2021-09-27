import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors, fonts } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  flex: 1;
  color: ${colors.heading};
  font-size: 15px;
  text-align: center;
  font-family: ${fonts.text500};
`;
