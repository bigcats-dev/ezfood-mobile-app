import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ChooseAuthScreen from './src/screens/ChooseAuthScreen';
import OtpScreen from './src/screens/OtpScreen';
import MainRegister from './src/screens/MainRegister';  
import OtpScreenLogin from './src/screens/OtpScreenLogin';
import FoodHome from './src/screens/FoodHome';
import FoodShopMain from './src/screens/FoodShopMain';
import FoodSelectMenu from './src/screens/FoodSelectMenu';
import FoodCategories from './src/screens/FoodCategories';
import FoodShopMainCart from './src/screens/FoodShopMainCart';
import FoodCheckOut from './src/screens/FoodCheckOut';
import OrderHistory from './src/screens/OrderHistory';
import ReviewScreen from './src/screens/ReviewScreen';



const Stack = createNativeStackNavigator();


function SplashScreen({ navigation }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseAuth'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
        <Image
            source={require('./assets/icon.png')}
                style={{ width: 120, height: 120, borderRadius: 24 }}
                resizeMode="contain"
            />
        <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
}

export default function App() {
 

  return (
    <PaperProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChooseAuth">
            <Stack.Screen name="ChooseAuth" component={ChooseAuthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'เข้าสู่ะบบ', }}  />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'สมัครใช้งาน' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FoodHome" component={FoodHome} options={{ headerShown: false }} />
            <Stack.Screen name="FoodShopMain" component={FoodShopMain} options={{ headerShown: false }} />
            <Stack.Screen name="FoodSelectMenu" component={FoodSelectMenu} options={{ headerShown: false }} />
            <Stack.Screen name="FoodCategories" component={FoodCategories} options={{ headerShown: false }} />
            <Stack.Screen name="FoodShopMainCart" component={FoodShopMainCart} options={{ headerShown: false }} />
            <Stack.Screen name="FoodCheckOut" component={FoodCheckOut} options={{ headerShown: false }} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={OtpScreen} />
            <Stack.Screen name="OtpScreenLogin" component={OtpScreenLogin} />
            <Stack.Screen name="MainRegis" component={MainRegister} /> 
        </Stack.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E874B', 
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});
