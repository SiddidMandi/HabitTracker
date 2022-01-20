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
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 6,
    elevation: 15,
    backgroundColor: "#9d31f6",
    marginVertical: 6,
    marginHorizontal: 1,
    width: 70,
    opacity: 1,
  },
  miniCardContent: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 2,
  },
});
