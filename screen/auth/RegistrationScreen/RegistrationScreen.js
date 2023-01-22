import React, { useState } from "react";
import {
  Alert,
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
import AddIcon from "../../../assets/images/icons/addIcon.svg";
import { styles } from "./RegistrationScreenStyle";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  // state
  const [state, setState] = useState(initialState);
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

  const handleSubmit = () => {
    const { login, email, password } = state;
    if (!login || !email || !password) {
      return Alert.alert("All fields are required");
    }
    navigation.navigate("Home", { user: { login, email, password } });
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
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 78,
              }}
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
                value={state.login}
                placeholder={"Login"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleInputFocus("login")}
                onBlur={() => handleInputBlur("login")}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
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
                  <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
                <View style={styles.warning}>
                  <Text style={styles.warningText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.warningBtn}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.warningBtnTitle}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.avatarSceleton}>
                <AddIcon
                  style={styles.addIcon}
                  width={25}
                  height={25}
                  fill="#FFFFFF"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
