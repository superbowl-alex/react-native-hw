import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CommentScreen from "../CommentsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import MapScreen from "../MapScreen";
import PostsScreen from "../PostsScreen";
import ProfileScreen from "../ProfileScreen";
import { styles } from "./HomeStyle";

import { View } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Home({ route }) {
  const Posts = ({ navigation }) => (
    <PostsScreen navigation={navigation} user={route.params.user} />
  );
  const Profile = ({ navigation }) => (
    <ProfileScreen navigation={navigation} user={route.params.user} />
  );

  return (
    <Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#212121",
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "#ffffff",
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBarContainer,
      }}
    >
      <Screen
        name="Posts"
        component={Posts}
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
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Ionicons name="add-outline" size={24} color={color} />
            </View>
          ),
          tabBarStyle: { display: "none" },
          unmountOnBlur: true,
        }}
        name="Create post"
        component={CreatePostsScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Feather name="user" size={24} color={color} />
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Screen
        name="Comments"
        component={CommentScreen}
        options={{
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
          unmountOnBlur: true,
        }}
      />
    </Navigator>
  );
}
