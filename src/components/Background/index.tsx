import React, { ReactNode } from 'react';

import { LinearGradient } from './styles';

type Props = {
  children: ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  return <LinearGradient>{children}</LinearGradient>;
};

export default Background;
