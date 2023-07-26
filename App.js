
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/src/views/screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import CourseScreen from './app/src/views/screens/CourseScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ title: null, headerStyle: { elevation: 0 } }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}
          options={{
            headerLeft: () => (<Icon name="sort" size={25}
              style={{ marginLeft: 20 }} />),
            headerRight: () => (<Image
              style={{ height: 40, width: 40, marginRight: 20 }}
              source={require("./app/src/assets/person.png")} />)
          }}>
        </Stack.Screen>
        <Stack.Screen name='CourseScreen' component={CourseScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('/HomeScreen')}>
                <Icon name='arrow-back-ios' size={25} style={{ marginLeft: 20 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon name='more-vert' size={25} style={{ marginRight: 20 }} />
            )
          })}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

