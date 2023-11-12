import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailProduk from './DetailProduk';
import Checkout from './Checkout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
  });

  React.useEffect(() => {
    // Simpan font dalam async storage setelah diunduh
    if (!loaded) {
      (async () => {
        await AsyncStorage.setItem('customFont', 'Raleway');
      })();
    }
  }, [loaded]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailProduk" component={DetailProduk} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
