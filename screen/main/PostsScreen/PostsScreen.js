import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./PostsScreenStyle";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInfo}>
        <Image
          style={styles.imageAvatar}
          source={require("../../../assets/images/myAvatar.jpg")}
        />
        <View style={styles.wrapUserInfo}>
          <Text style={styles.userName}>Oleksandr Shendryk</Text>
          <Text style={styles.userMail}>oleksandr.shendryk.ua@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}
