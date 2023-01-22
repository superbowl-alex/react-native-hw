import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 32,
  },
  headerContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    paddingVertical: 11,
    backgroundColor: "#ffffff",
    marginTop: Platform.OS === "ios" ? 10 : 0,
    marginBottom: 32,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
    letterSpacing: -0.408,
  },
  logoutButton: {
    position: "absolute",
    bottom: 11,
    right: 16,
  },

  wrapInfo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginBottom: 32,
  },
  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  wrapUserInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userMail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
  },
  postsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
  },
});
