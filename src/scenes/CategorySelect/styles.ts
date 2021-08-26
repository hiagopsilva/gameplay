import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 40 },
})`
  flex-direction: row;
  min-height: 120px;
  min-width: 120px;
  padding-left: 24px;
`;
