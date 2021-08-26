import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../scenes/Home';
import { SignIn } from '../scenes/SignIn';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export { AuthRoutes };
