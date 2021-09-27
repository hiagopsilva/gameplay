import styled from 'styled-components/native';
import { colors } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;
export const Overlay = styled.View`
  flex: 1;
  background: ${colors.overlay};
`;

export const ViewBar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background: ${colors.secondary30};
  align-self: center;
  margin-top: 13px;
  margin-bottom: 103px;
`;
