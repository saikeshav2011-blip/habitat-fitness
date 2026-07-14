import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Habitᵃᵗ Fitness</Text>

      <Text style={styles.subtitle}>
        Build your fitness habit one workout at a time.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Start Workout
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
    padding: 20,
  },

  logo: {
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },

  button: {
    marginTop: 40,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
