import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
import { Formik } from "formik";

//initial values MUST be emmpty

export default function DayAdder({ addDay }) {
  return (
    <View>
      <Formik
        initialValues={{
          date: "",
          habit1: "",
          habit2: "",
          habit3: "",
          habit4: "",
          habit5: "",
        }}
        onSubmit={(values) => {
          addDay(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="date"
              onChangeText={props.handleChange("date")}
              value={props.values.date}
            />
            <TextInput
              style={styles.textInput}
              placeholder="add habit"
              onChangeText={props.handleChange("habit1")}
              value={props.values.habit1}
            />
            <TextInput
              style={styles.textInput}
              placeholder="add habit"
              onChangeText={props.handleChange("habit2")}
              value={props.values.habit2}
            />
            <TextInput
              style={styles.textInput}
              placeholder="add habit"
              onChangeText={props.handleChange("habit3")}
              value={props.values.habit3}
            />
            <TextInput
              style={styles.textInput}
              placeholder="add habit"
              onChangeText={props.handleChange("habit4")}
              value={props.values.habit4}
            />
            <TextInput
              style={styles.textInput}
              placeholder="add habit"
              onChangeText={props.handleChange("habit5")}
              value={props.values.habit5}
            />
            <Button
              color="maroon"
              title="submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {},
});
