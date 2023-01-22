import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./screen/auth/LoginScreen";
import RegistrationScreen from "./screen/auth/RegistrationScreen";
import Home from "./screen/main/Home";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegistrationScreen} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};
