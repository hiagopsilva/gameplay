import styled from 'styled-components/native';
import { RectButton as RectButtonModules } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../global/styles/theme';

export const RectButton = styled(RectButtonModules)`
  height: 48px;
  width: 48px;
  background-color: ${colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(MaterialCommunityIcons).attrs({
  color: colors.heading,
  size: 24,
})``;
