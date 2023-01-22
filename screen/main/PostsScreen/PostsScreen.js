import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Post from "../OnePost";
import { POSTS } from "./posts";
import { styles } from "./PostsScreenStyle";

export default function PostsScreen({ navigation, user: { login, email } }) {
  const lastElemId = POSTS[POSTS.length - 1].id;

  const handleLogout = () => navigation.navigate("Login");
  const handleCommentClick = (post) =>
    navigation.navigate("Comments", { post });
  const handleLocationClick = (location, title) => {
    navigation.navigate("Map", { location, title });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Posts</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <MaterialIcons
            name="logout"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.wrapInfo}>
            <Image
              style={styles.imageAvatar}
              source={require("../../../assets/images/myAvatar.jpg")}
            />
            <View style={styles.wrapUserInfo}>
              <Text style={styles.userName}>{login}</Text>
              <Text style={styles.userMail}>{email}</Text>
            </View>
          </View>
        }
        style={styles.postsContainer}
        data={POSTS}
        renderItem={({ item }) => (
          <Post
            post={item}
            lastElemId={lastElemId}
            handleCommentClick={handleCommentClick}
            handleLocationClick={handleLocationClick}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}
