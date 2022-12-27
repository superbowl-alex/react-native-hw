import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import LoginScreen from "./screen/auth/LoginScreen";
import RegistrationScreen from "./screen/auth/RegistrationScreen";
import CreatePostsScreen from "./screen/main/CreatePostsScreen";
import PostsScreen from "./screen/main/PostsScreen";
import ProfileScreen from "./screen/main/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#212121",
        tabBarShowLabel: false,
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),

          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="grid-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add-outline" size={24} color={color} />
            </View>
          ),
        }}
        name="Create post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="user" size={24} color={color} />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
