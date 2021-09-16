import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/discord.svg';

const GuildIcon: React.FC = ({ ...rest }) => {
  const uri =
    'https://images-na.ssl-images-amazon.com/images/I/51lpm9SpsJL.png';

  return <Container {...rest} source={{ uri }} />;
};

export { GuildIcon };
