import React, { useState } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Button,
  Modal,
  ImageBackground,
} from "react-native";
import Card from "../card";
import MiniCard from "../miniCard";
import DateCard from "../dateCard";
import DayAdder from "./dayAdder";
import uuid from "react-native-uuid";

export default function Habits() {
  const [miniHabitColor, setMiniHabitColor] = useState("#ff0000");
  const [days, setDays] = useState([
    {
      date: "69-Dec22",
      habit1: "habit",
      habit2: "add habit2",
      habit3: "add habit3",
      habit4: "add habit4",
      habit5: "add habit5",
      key: "1",
    },
    {
      date: "date",
      habit1: "add habit",
      habit2: "add habit2",
      habit3: "add habit3",
      habit4: "add habit4",
      habit5: "add habit5",
      key: "2",
    },
    {
      date: "date",
      habit1: "add habit",
      habit2: "add habit2",
      habit3: "add habit3",
      habit4: "add habit4",
      habit5: "add habit5",
      key: "3",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const addDay = (day) => {
    day.key = uuid.v4();
    setDays((currentDays) => {
      return [day, ...currentDays];
    });
    setModalOpen(false);
  };
  return (
    <ImageBackground
      source={require("../images/backGround.jpg")}
      style={styles.container}
    >
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <Text> hello from modal </Text>
          <DayAdder addDay={addDay} />
          <Button title="close" onPress={() => setModalOpen(false)} />
        </View>
      </Modal>
      <Button title="+" onPress={() => setModalOpen(true)} />
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card>
              <View>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View style={styles.miniCardView}>
                <MiniCard>
                  <Text style={styles.habitText}>{item.habit1}</Text>
                </MiniCard>
                <MiniCard>
                  <Text style={styles.habitText}> {item.habit2}</Text>
                </MiniCard>
                <MiniCard>
                  <Text style={styles.habitText}> {item.habit3}</Text>
                </MiniCard>
                <MiniCard>
                  <Text style={styles.habitText}> {item.habit4}</Text>
                </MiniCard>
                <MiniCard>
                  <Text style={styles.habitText}> {item.habit5}</Text>
                </MiniCard>
              </View>
            </Card>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "column",
  },
  habitText: {
    fontSize: 13,
    color: "#fbff6a",
  },
  miniCardView: {
    flexDirection: "row",
  },
  dateText: {
    color: "#0f5b9d",
    flexDirection: "column",
    fontFamily: "mochiyBold",
  },
});
