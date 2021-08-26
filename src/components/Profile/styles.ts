import styled from 'styled-components/native';
import { colors, fonts } from '../../global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
`;

export const WrapperUser = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${fonts.title500};
  font-size: 24px;
  color: ${colors.heading};
  margin-right: 5px;
`;

export const Username = styled.Text`
  font-family: ${fonts.title700};
  font-size: 24px;
  color: ${colors.heading};
`;

export const Message = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.highlight};
`;
