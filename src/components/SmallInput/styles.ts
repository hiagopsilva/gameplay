import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts } from '../../global/styles/theme';

export const Input = styled(TextInput)`
  width: 48px;
  height: 48px;
  background: ${colors.secondary40};
  border-radius: 8px;
  color: ${colors.heading};
  font-family: ${fonts.text400};
  font-size: 13px;
  margin-right: 4px;
  text-align: center;
`;
