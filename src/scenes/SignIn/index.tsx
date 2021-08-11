import React from 'react';
import { Image, View } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

const SignIn: React.FC = () => {
  return (
    <View>
      <Image source={IllustrationImg} />
    </View>
  );
};

export { SignIn };
