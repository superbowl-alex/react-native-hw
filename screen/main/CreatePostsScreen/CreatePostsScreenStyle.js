import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  containerImage: {},
  wrapImage: {
    position: "relative",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  addImage: {
    position: "absolute",
    top: 90,
    left: 141,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {},
  textImage: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  form: {
    width: "100%",
    marginTop: 32,
    backgroundColor: "#fff",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
  },
  button: {
    marginTop: 16,
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});