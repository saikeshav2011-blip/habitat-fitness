import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        Habitᵃᵗ Fitness
      </Text>

      <Text style={styles.subtitle}>
        Build your fitness habit one workout at a time.
      </Text>


      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Start Workout
        </Text>
      </Pressable>


      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          My Saved Workouts
        </Text>
      </Pressable>


      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Exercise Library
        </Text>
      </Pressable>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },


  logo: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },


  subtitle: {
    marginTop: 15,
    marginBottom: 40,
    fontSize: 16,
    textAlign: "center",
  },


  button: {
    width: "80%",
    padding: 18,
    marginVertical: 8,
    borderRadius: 15,
    alignItems: "center",
  },


  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  }

});
