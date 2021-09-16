import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';
import { colors, fonts } from '../../global/styles/theme';

export const Wrapper = styled(RectButton)``;

export const GuildIconStyled = styled(GuildIcon)``;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title700};
  color: ${colors.heading};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const WrapperPlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextPlayer = styled.Text`
  font-family: ${fonts.text500};
  color: ${colors.heading};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperDateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextDate = styled.Text`
  font-family: ${fonts.text500};
  color: ${colors.heading};
  font-size: 13px;
  margin-right: 7px;
`;
