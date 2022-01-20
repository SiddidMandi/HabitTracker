import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Habits from "./components/habits";
import * as Font from "expo-font";
//import { AppLoading } from "expo";, this doesnt exist anymore
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    mochiyBold: require("./fonts/MochiyPopPOne-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ImageBackground
        source={require("./images/backGround.jpg")}
        style={styles.container}
      >
        <Habits />
      </ImageBackground>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
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
yarn add expo-font
expo install expo-app-loading
*/
