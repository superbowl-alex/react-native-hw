import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CameraIcon from "../../../assets/images/icons/camera.svg";
import { styles } from "./CreatePostsScreenStyle";

const initialState = {
  photo: "",
  title: "",
  location: "",
};

export default function CreatePostsScreen({ navigation }) {
  // state
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  const isFormCompleted = state.photo && state.title && state.location;
  const isAnyFieldCompleted = state.photo || state.title || state.location;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}> */}
      <View style={styles.container}>
        <View
          style={
            isShowKeyboard
              ? [styles.headerContainer, { marginBottom: 5 }]
              : styles.headerContainer
          }
        >
          <Text style={styles.headerTitle}>Create post</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.goBackButton}
            onPress={() => navigation.navigate("Posts")}
          >
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapMain}>
          <View style={styles.wrapForm}>
            <View style={styles.containerImage}>
              <View style={styles.wrapImage}>
                <View style={styles.addImage}>
                  <CameraIcon
                    style={styles.cameraIcon}
                    width={24}
                    height={24}
                    fill="#BDBDBD"
                  />
                </View>
              </View>
              <Text style={styles.textImage}>Download photo</Text>
            </View>
            <View
              style={
                isShowKeyboard ? [styles.form, { marginTop: 5 }] : styles.form
              }
            >
              <TextInput
                style={
                  isShowKeyboard
                    ? [styles.input, { marginBottom: 5 }]
                    : styles.input
                }
                selectionColor={"#212121"}
                value={state.title}
                placeholder={"Title..."}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, title: value }))
                }
              />
              <TextInput
                style={styles.input}
                selectionColor={"#212121"}
                value={state.location}
                placeholder={"Location..."}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={
                  isFormCompleted
                    ? [
                        styles.button,
                        { color: "#fff", backgroundColor: "#FF6C00" },
                      ]
                    : styles.button
                }
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTitle}>Publish</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={
              isAnyFieldCompleted
                ? [
                    styles.trashButton,
                    { color: "#fff", backgroundColor: "#FF6C00" },
                  ]
                : styles.trashButton
            }
            onPress={() => setState(initialState)}
          >
            <Feather
              name="trash-2"
              size={24}
              color={isAnyFieldCompleted ? "#fff" : "#BDBDBD"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
}
