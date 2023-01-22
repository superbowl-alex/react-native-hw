import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarContainer: {
    width: "100%",
    height: 83,
    paddingTop: 9,
    paddingHorizontal: 67,
    ...Platform.select({
      ios: {
        height: 83,
      },
      android: {
        height: 53,
      },
    }),
  },

  tabBarItem: {
    minWidth: 70,
    height: 40,
    borderRadius: 20,
  },
});
