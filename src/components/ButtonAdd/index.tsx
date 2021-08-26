import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { RectButton, PlusIcon } from './styles';

type Props = RectButtonProps;

const ButtonAdd: React.FC<Props> = ({ ...rest }) => {
  return (
    <RectButton {...rest}>
      <PlusIcon name="plus" />
    </RectButton>
  );
};

export { ButtonAdd };
