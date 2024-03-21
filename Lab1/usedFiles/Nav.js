import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DisplayScreenOnBoard from './components/ScreenOnBoard';

function HomeScreen({navigation}) {
  return (
    <>
    <DisplayScreenOnBoard image={require('./assets/images/frog1.png')} text="nibiru.crs@gmail.com" />
    </>
    );
}

function AboutScreen() {
  return (
    <DisplayScreenOnBoard image={require('./assets/images/frog2.png')} text="This is FROOOOOOG" />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
        {/*Define our routes*/}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

