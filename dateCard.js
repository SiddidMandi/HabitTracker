import { StyleSheet, View } from "react-native";
import React from "react";

export default function DateCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#fff",
    shadowOpacity: 0.4,
    marginVertical: 10,
  },
  cardContent: {
    marginHorizontal: 1,
    marginVertical: 1,
  },
});
