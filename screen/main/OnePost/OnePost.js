import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./OnePostStyle";

export default function Post({
  post,
  lastElemId,
  handleCommentClick,
  handleLocationClick,
}) {
  return (
    <View
      style={{
        ...styles.postContainer,
        marginBottom: post.id !== lastElemId ? 34 : 15,
      }}
    >
      <Image style={styles.postImage} />
      <Text style={styles.postContainer}></Text>
      <View style={styles.postContainer}>
        <View style={styles.postContainer}></View>
        <View style={styles.postContainer}></View>
      </View>
    </View>
  );
}
