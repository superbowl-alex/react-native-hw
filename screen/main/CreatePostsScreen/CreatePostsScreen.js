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

export default function CreatePostsScreen() {
  // state
  const [state, setState] = useState(initialState);
  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  const isFormCompleted = state.photo && state.title && state.location;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}> */}
      <View style={styles.container}>
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
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            selectionColor={"#212121"}
            value={state.title}
            placeholder={"Title..."}
            placeholderTextColor={"#BDBDBD"}
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
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, location: value }))
            }
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={
              isFormCompleted
                ? [styles.button, { color: "#fff", backgroundColor: "#FF6C00" }]
                : styles.button
            }
            onPress={handleSubmit}
          >
            <Text style={styles.buttonTitle}>Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
}
