import styled from 'styled-components/native';
import { colors } from '../../global/styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary90};
`;

export const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
