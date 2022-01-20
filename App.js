import { StyleSheet, Text, View } from "react-native";
import Habits from "./components/habits";

export default function App() {
  return (
    <View style={styles.container}>
      <Habits />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#0c5ead",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* @react-navigation/native 
@react-navigatin/stack 
expo install react-native-gesture-handler 
yarn add react-native-uuid
*/
