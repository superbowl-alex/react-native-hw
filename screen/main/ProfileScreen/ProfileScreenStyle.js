import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapMain: {
    marginTop: 100,
    position: "relative",
    width: "100%",
    height: "75%",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
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
  addIcon: {
    position: "absolute",
    bottom: 14,
    right: -13,
    color: "#FF6C00",
  },
  logoutButton: {
    position: "absolute",
    top: 22,
    right: 0,
  },
});
