import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, DarkTheme } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const App = () => {

  const theme = {
    ...DarkTheme,
    dark: false
  }

  return (
    <PaperProvider theme={theme}>
      <Provider store={store} >
        <View>
          <Text>MEH</Text>
        </View>
      </Provider>
    </PaperProvider>
  );
}

export default App
