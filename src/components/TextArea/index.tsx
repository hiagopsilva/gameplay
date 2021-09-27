import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

const TextArea: React.ElementType<TextInputProps> = ({ ...rest }) => {
  return <Input {...rest} />;
};

export { TextArea };
