import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./LoginScreenStyle";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  // state
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState({
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

  const handleSubmit = () => {
    navigation.navigate("Home");
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/background.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={
                isShowKeyboard
                  ? [styles.form, { paddingBottom: 32 }]
                  : styles.form
              }
            >
              <Text style={styles.formTitle}>Log in</Text>
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
                value={state.email}
                placeholder={"Email"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleInputFocus("email")}
                onBlur={() => handleInputBlur("email")}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
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
                  value={state.password}
                  placeholder={"Password"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={!showPassword ? true : false}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={() => handleInputBlur("password")}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Text
                  style={styles.inputPasswordText}
                  onPress={handleTogglePassword}
                >
                  {!showPassword ? "Show" : "Hide"}
                </Text>
              </View>
              <View style={{ display: isShowKeyboard ? "none" : "flex" }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.warning}>
                  <Text style={styles.warningText}>Don't have an account?</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.warningBtn}
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.warningBtnTitle}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
