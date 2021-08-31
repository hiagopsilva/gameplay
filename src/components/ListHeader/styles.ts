import styled from 'styled-components/native';
import { colors, fonts } from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 24px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title700};
  color: ${colors.highlight};
  font-size: 18px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.highlight};
  font-size: 13px;
`;
