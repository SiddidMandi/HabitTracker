import { StyleSheet, View } from "react-native";
import React from "react";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#a2fddb",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#fdf54f",
    shadowOpacity: 0.4,
    marginVertical: 5,
    width: 363,
  },
  cardContent: {
    marginHorizontal: 1,
    marginVertical: 1,
  },
});
