import react from 'react'
import Start from './components/Start';
import Chat from './components/Chat'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";

const Stack = createStackNavigator();

 export default class App extends react.Component {

render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login & register">
        <Stack.Screen name="Login & register" component={Login} />

        <Stack.Screen name="Set Name" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 }