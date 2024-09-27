

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Articlelist from './components/Articlelist';
import Articledetail from './components/articledetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ArticleList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f3b758',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="ArticleList"
          component={Articlelist}
          options={{ title: 'Liste des Articles' }}
        />
        <Stack.Screen
          name="ArticleDetails"
          component={Articledetail}
          options={{ title: 'Détails de l\'Article' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
