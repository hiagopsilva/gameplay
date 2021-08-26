import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding-horizontal: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
`;

export const WrapperCategorySelect = styled.View`
  flex: 1;
`;
