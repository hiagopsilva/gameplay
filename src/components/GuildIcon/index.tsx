import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/discord.svg';

const GuildIcon: React.FC = ({ ...rest }) => {
  return <Container {...rest} uri={Logo} />;
};

export { GuildIcon };
