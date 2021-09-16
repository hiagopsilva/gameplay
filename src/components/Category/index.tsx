import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, WrapperGradient, Content, Checked, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = true,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <WrapperGradient>
        <Content checked={checked}>
          {hasCheckBox && <Checked checked={checked} />}
          <Icon />

          <Title>{title}</Title>
        </Content>
      </WrapperGradient>
    </Container>
  );
};

export { Category };
