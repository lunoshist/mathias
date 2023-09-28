import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/Home/HomeScreen';
import RepertoireScreen from './src/screen/Repertoire/RepertoireScreen';
import VoteScreen from './src/screen/Vote/VoteScreen';
import ProfilScreen from './src/screen/Profil/ProfilScreen';
import NavBar from './src/components/Navbar/Navbar';

import Frame1 from './src/screen/Connection/ConnectionScreen.js';
import Frame2 from './src/screen/Connection/SinscrireScreen.js';
import Frame3 from './src/screen/Connection/ImportFileScreen.js';

const Stack = createStackNavigator();

function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Connection"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Connection" component={Frame1} />
        <Stack.Screen name="Inscription" component={Frame2} />
        <Stack.Screen name="ImportFile" component={Frame3} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Repertoire" component={RepertoireScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
}

export default App;