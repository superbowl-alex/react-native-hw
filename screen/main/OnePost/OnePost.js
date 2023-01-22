import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./OnePostStyle";

export default function Post({
  post,
  handleCommentClick,
  handleLocationClick,
}) {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.postImage} />
      <Text style={styles.postContainer}></Text>
      <View style={styles.postContainer}>
        <View style={styles.postContainer}></View>
        <View style={styles.postContainer}></View>
      </View>
    </View>
  );
}
