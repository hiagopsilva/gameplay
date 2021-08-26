import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${colors.line};
`;

export const Text = styled.Text`
  flex: 1;
  color: ${colors.heading};
  font-size: 15px;
  text-align: center;
`;

export const Image = styled.Image``;
