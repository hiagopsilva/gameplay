import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

import { colors, fonts } from '../../global/styles/theme';

import { Background } from '../Background';

export const Container = styled(Background)`
  flex: 1;
`;

export const WrapperAction = styled(BorderlessButton)``;

export const ShareIcon = styled(Fontisto).attrs({
  name: 'share',
  size: 24,
  color: colors.primary,
})``;

export const Banner = styled(ImageBackground)`
  width: 100%;
  height: 234px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.heading};
`;
