import { StyleSheet, SafeAreaView } from "react-native";
import Colors from "./app/utils/Colors";
import { useFonts } from "@use-expo/font";

import Home from "./app/components/Home";
import Details from "./app/components/Details";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const customFonts = {
  LatoBold: require("./app/fonts/Lato-Bold.ttf"),
  LatoRegular: require("./app/fonts/Lato-Regular.ttf"),
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.darkgrey,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="heart" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isFontLoaded = useFonts(customFonts);

  if (isFontLoaded?.[0]) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
