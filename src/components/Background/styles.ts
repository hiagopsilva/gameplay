import styled from 'styled-components/native';
import { LinearGradient as LinearGradientModules } from 'expo-linear-gradient';
import { colors } from '../../global/styles/theme';

export const LinearGradient = styled(LinearGradientModules).attrs({
  colors: [colors.secondary80, colors.secondary100],
})`
  flex: 1;
`;
