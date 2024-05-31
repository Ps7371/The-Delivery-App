import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FomeScreen from "./screens/FomeScreen";
import RestrauntScreen from "./screens/RestrauntScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={FomeScreen} />
            <Stack.Screen name="Restraunt" component={RestrauntScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} 
             options={{presentation:'modal',headerShown:false}}
             />
             <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} 
             options={{presentation:"fullScreenModal",headerShown:false}}
             />
             <Stack.Screen name="Delivery" component={DeliveryScreen} 
             options={{presentation:"fullScreenModal",headerShown:false}}
             />
           
         
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
