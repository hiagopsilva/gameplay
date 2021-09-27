import styled from 'styled-components/native';
import { colors, fonts } from '../../global/styles/theme';

type WrapperBulletStatusProps = {
  isOnline?: boolean;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const WrapperStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperBulletStatus = styled.View`
  background-color: ${(props: WrapperBulletStatusProps) =>
    props.isOnline ? colors.on : colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;

export const Title = styled.Text`
  font-family: ${fonts.title700};
  color: ${colors.heading};
  font-size: 18px;
`;

export const TextNameStatus = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.heading};
  font-size: 13px;
`;
