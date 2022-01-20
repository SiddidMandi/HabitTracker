import { StyleSheet, View } from "react-native";
import React from "react";

export default function MiniCard(props) {
  return (
    <View style={styles.miniCard}>
      <View style={styles.miniCardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  miniCard: {
    padding: 5,
    flexDirection: "row",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#a0216a",
    marginVertical: 6,
    marginHorizontal: 1,
    width: 70,
  },
  miniCardContent: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 2,
  },
});
