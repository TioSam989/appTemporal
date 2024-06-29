import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text, DarkTheme } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import StepsCarouselScreen from './src/screens/StepsCarouselScreen';

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='splash'
    >
      <Stack.Screen
        name={'splash'}
        component={SplashScreen}
      />
      <Stack.Screen
        name={'stepsCarousel'}
        component={StepsCarouselScreen}
      />
    </Stack.Navigator>
  )
}

const App = () => {

  const theme = {
    ...DarkTheme,
    dark: false
  }

  return (
    <PaperProvider theme={theme}>
      <Provider store={store} >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export default App
