import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import AddIcon from "../../../assets/images/icons/addIcon.svg";
import { styles } from "./ProfileScreenStyle";

export default function ProfileScreen({ navigation, user: { login, email } }) {
  const handleLogout = () => navigation.navigate("Login");
  const userName = login || "No nicname";
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/background.jpg")}
      >
        <View style={styles.wrapMain}>
          <Text style={styles.title}>{userName}</Text>
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

          <View style={styles.avatarSceleton}>
            <AddIcon
              style={styles.addIcon}
              width={25}
              height={25}
              fill="#FFFFFF"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
