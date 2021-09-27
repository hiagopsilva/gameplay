import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

const SmallInput: React.ElementType<TextInputProps> = ({ ...rest }) => {
  return <Input keyboardType="numeric" {...rest} />;
};

export { SmallInput };
