import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** PAGES */
import Dashboard from '../../screens/Dashboard';

/** STACK NAVIGATION COMPONENT */
function StackRoutes() {

  /** RETURN STACK NAVIGATION */
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen 
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default StackRoutes;