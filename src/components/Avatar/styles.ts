import styled from 'styled-components/native';
import { LinearGradient as LinearGradientModules } from 'expo-linear-gradient';
import { colors } from '../../global/styles/theme';

export const Container = styled.View`
  width: 53px;
  height: 53px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const LinearGradient = styled(LinearGradientModules).attrs({
  colors: [colors.secondary50, colors.secondary70],
})`
  flex: 1;
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: 53px;
  height: 53px;
  border-radius: 8px;
`;
