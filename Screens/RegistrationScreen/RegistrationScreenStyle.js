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
  form: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
  addIcon: {
    position: "absolute",
    bottom: 14,
    right: -13,
    color: "#FF6C00",
  },
});