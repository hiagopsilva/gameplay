import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../global/styles/theme';

import { Home } from '../scenes/Home';
import { SignIn } from '../scenes/SignIn';
import AppointmentCreate from '../components/AppointmentCreate';
import AppointmentDetails from '../components/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
};

export { AuthRoutes };
