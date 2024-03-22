import React, { useState } from 'react';
import DisplayScreenMenu from './components/Menu';
import DisplayScreenMenuAccount from './components/MenuAccount';
import DisplayScreenMenuSettings from './components/MenuSettings';
import DisplayMainScreen from './components/MainScreen';
import DisplayScreenServer from './components/ServersScreen';
import { navigationRef } from './components/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [connectionType, setConnectionType] = useState("OpenVPN(TCP)");
  const [obfuscationType, setObfuscationType] = useState("Chameleon");
  const [encriptionType, setEncriptionType] = useState("Auto");
  const [isEnabled_IPv6, setIsEnabled_IPv6] = useState(false);
  

  const SettingsScreenComponent = () => {
    console.log("connectionType:", connectionType);
    return (
      <DisplayScreenMenuSettings 
        connectionType={connectionType} setConnectionType={setConnectionType}
        obfuscationType={obfuscationType} setObfuscationType={setObfuscationType}
        encriptionType={encriptionType} setEncriptionType={setEncriptionType}
        isEnabled_IPv6={isEnabled_IPv6} setIsEnabled_IPv6={setIsEnabled_IPv6} 
      />
    );
  };

  
  const server = { country: "Italy", city: "Milan", flag: '🇮🇹', ipAddress: "155.20.11.01", timeRunning: "00:01:22" };
  const [currentServer, setCurrentServer] = useState(server);

  const MainScreenComponent = () => {
    return (
      <DisplayMainScreen server={currentServer}/>
    );
  };

  const ServerScreenComponent = () => {
    return (
      <DisplayScreenServer currentServer={currentServer} setCurrentServer={setCurrentServer} />
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={DisplayScreenMenu} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={DisplayScreenMenuAccount} options={{headerShown: false}}/>
        <Stack.Screen name="Settings" component={SettingsScreenComponent} options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={MainScreenComponent} options={{headerShown: false}} />
        <Stack.Screen name="Server" component={ServerScreenComponent} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}