import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { RectButton, LinearGradient, Content, Checked, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}) => {
  return (
    <RectButton {...rest}>
      <LinearGradient>
        <Content checked={checked}>
          <Checked checked={checked} />
          <Icon />

          <Title>{title}</Title>
        </Content>
      </LinearGradient>
    </RectButton>
  );
};

export { Category };
