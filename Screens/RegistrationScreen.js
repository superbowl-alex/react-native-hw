import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function RegistrationScreen() {
  // state
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // handlers
  const handleInputFocus = (textinput) => {
    setIsFocused({
      [textinput]: true,
    });
    setIsShowKeyboard(true);
  };

  const handleInputBlur = (textinput) => {
    setIsFocused({
      [textinput]: false,
    });
    setIsShowKeyboard(false);
  };

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/background.jpg")}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View
            style={
              isShowKeyboard
                ? [styles.form, { paddingBottom: 32 }]
                : styles.form
            }
          >
            <Text style={styles.formTitle}>Register</Text>
            <TextInput
              style={
                isFocused.login
                  ? [
                      styles.input,
                      { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
                    ]
                  : styles.input
              }
              selectionColor={"#212121"}
              placeholder={"Login"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleInputFocus("login")}
              onBlur={() => handleInputBlur("login")}
            />
            <TextInput
              style={
                isFocused.email
                  ? [
                      styles.input,
                      { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
                    ]
                  : styles.input
              }
              selectionColor={"#212121"}
              placeholder={"Email"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleInputFocus("email")}
              onBlur={() => handleInputBlur("email")}
            />
            <View
              style={
                isShowKeyboard
                  ? [styles.wrapPassword, { marginBottom: 0 }]
                  : styles.wrapPassword
              }
            >
              <TextInput
                style={
                  isFocused.password
                    ? [
                        styles.input,
                        {
                          borderColor: "#FF6C00",
                          backgroundColor: "#FFFFFF",
                          marginBottom: 0,
                        },
                      ]
                    : [styles.input, { marginBottom: 0 }]
                }
                selectionColor={"#212121"}
                placeholder={"Password"}
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={!showPassword ? true : false}
                onFocus={() => handleInputFocus("password")}
                onBlur={() => handleInputBlur("password")}
              />
              <Text
                style={styles.inputPasswordText}
                onPress={handleTogglePassword}
              >
                {!showPassword ? "Show" : "Hide"}
              </Text>
            </View>
            <View style={{ display: isShowKeyboard ? "none" : "flex" }}>
              <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonTitle}>Register</Text>
              </TouchableOpacity>
              <View style={styles.warning}>
                <Text style={styles.warningText}>Already have an account?</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.warningBtn}>
                  <Text style={styles.warningBtnTitle}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.avatarSceleton}>
              <View style={styles.avatarAdd}>
                <Text style={styles.avatarAddText}>+</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 78,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    marginBottom: 32,
    fontSize: 30,
    // fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  wrapPassword: {
    position: "relative",
    marginBottom: 43,
  },
  inputPasswordText: {
    position: "absolute",
    right: 16,
    top: 15,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    marginBottom: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  warning: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginRight: 15,
  },
  warningBtn: {
    height: 23,
    backgroundColor: "#FF6C00",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  warningBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  avatarSceleton: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -45,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarAdd: {
    position: "absolute",
    bottom: 14,
    right: -14,
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarAddText: {
    fontSize: 25,
    lineHeight: 25,
    color: "#FF6C00",
  },
});
