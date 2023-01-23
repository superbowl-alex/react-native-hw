import { Feather, Ionicons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import shortid from "shortid";
import CameraIcon from "../../../assets/images/icons/camera.svg";
import { POSTS } from "../../../posts";
import { styles } from "./CreatePostsScreenStyle";

const initialPost = {
  image: null,
  title: "",
  location: "",
};

export default function CreatePostsScreen({ navigation }) {
  // state
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [locationPermission, requestLocationPermission] =
    Location.useForegroundPermissions();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [userLocation, setUserLocation] = useState(null);
  const [post, setPost] = useState(initialPost);

  useEffect(() => {
    (async () => {
      await requestPermission();
      await requestLocationPermission();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(coords);
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPost((prevPost) => ({
        ...prevPost,
        image: uri,
      }));
    }
  };

  const changeCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };
  const isFormCompleted = post.image && post.title && post.location;
  const isAnyFieldCompleted = post.image || post.title || post.location;

  const publishPost = async () => {
    if (!isFormCompleted) return Alert.alert("You have empty fields");

    // let location = await Location.getCurrentPositionAsync();
    // const coords = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // };
    // console.log("coords", coords);
    // setUserLocation(coords);
    console.log("userLocation", userLocation);

    POSTS.unshift({
      id: shortid.generate(),
      title: post.title,
      location: post.location,
      exactLocation: userLocation,
      photo: post.image,
      likes: 0,
      comments: [],
    });

    navigation.navigate("Posts");

    setPost(initialPost);
  };

  if (!permission || !locationPermission) return null;
  if (!permission.granted) Alert.alert("No access to camera");

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
                {!post.image && permission.granted && (
                  <Camera style={styles.camera} type={type} ref={setCameraRef}>
                    <TouchableOpacity
                      onPress={takePhoto}
                      style={styles.addImage}
                    >
                      <CameraIcon
                        style={styles.cameraIcon}
                        width={24}
                        height={24}
                        fill="#BDBDBD"
                      />
                    </TouchableOpacity>
                  </Camera>
                )}
                {post.image && (
                  <View style={styles.wrapPhoto}>
                    <Image style={styles.photo} source={{ uri: post.image }} />
                  </View>
                )}
              </View>
              <TouchableOpacity
                style={{
                  ...styles.uploadPhoto,
                  color: post.image ? "#ffffff" : "#BDBDBD",
                  backgroundColor: post.image ? "#FF6C00" : "#F6F6F6",
                }}
                onPress={() => {
                  if (!post.image) return;
                  setPost((prevPost) => ({
                    ...prevPost,
                    image: null,
                  }));
                }}
              >
                <Text style={styles.textImage}>Download photo</Text>
              </TouchableOpacity>
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
                value={post.title}
                placeholder={"Title..."}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
                onChangeText={(value) =>
                  setPost((prevState) => ({ ...prevState, title: value }))
                }
              />
              <TextInput
                style={styles.input}
                selectionColor={"#212121"}
                value={post.location}
                placeholder={"Location..."}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
                onChangeText={(value) =>
                  setPost((prevState) => ({ ...prevState, location: value }))
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
                onPress={publishPost}
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
            onPress={() => setPost(initialPost)}
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
