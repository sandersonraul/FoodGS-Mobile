import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Deliveries from "../pages/Deliveries";
import MyDeliveries from "../pages/Deliveries/myDeliveries";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Routes() {
 return (
   <Stack.Navigator>
    <Stack.Screen 
      name="Home"
      component={Home}
      options={{ headerShown: false }} 
    />

    <Stack.Screen 
      name="Login"
      component={Login}
      options={{ headerShown: false }}  
    />

    <Stack.Screen 
      name="Deliveries"
      component={BottomNavigation}
      options={{ headerShown: false }}  
    />

   </Stack.Navigator>
  );
}

export function BottomNavigation() {
  return (
      <BottomTab.Navigator screenOptions={  { tabBarLabelStyle: { fontSize: 12},tabBarActiveTintColor: '#004AAD',tabBarStyle: {backgroundColor: '#FFF'},headerShown:false, labelPosition: 'below-icon'}}>
          <BottomTab.Screen name="Home" options={{ tabBarIcon: ({ color }) => <Entypo name='home' size={30} color={color} /> } } component={Deliveries}/>
          <BottomTab.Screen name="My Deliveries" options={{tabBarIcon: ({ color }) => <Feather name="package" size={30} color={color} />} } component={MyDeliveries}/>
          <BottomTab.Screen name="Profile" options={{tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />} } component={Profile}/>
      </BottomTab.Navigator>
  );
}

