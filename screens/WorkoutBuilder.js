import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from "react-native";

export default function WorkoutBuilder() {

  const [workoutName, setWorkoutName] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [workouts, setWorkouts] = useState([]);


  function addExercise() {

    if (exerciseName.trim() === "") {
      return;
    }

    setWorkouts([
      ...workouts,
      {
        name: exerciseName,
        workTime: 30,
        restTime: 15
      }
    ]);

    setExerciseName("");
  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Create Workout
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workoutName}
        onChangeText={setWorkoutName}
      />


      <TextInput
        style={styles.input}
        placeholder="Add Exercise"
        value={exerciseName}
        onChangeText={setExerciseName}
      />


      <Pressable
        style={styles.button}
        onPress={addExercise}
      >
        <Text style={styles.buttonText}>
          Add Exercise
        </Text>
      </Pressable>


      <Text style={styles.subtitle}>
        Exercises:
      </Text>


      {workouts.map((exercise, index) => (

        <Text key={index} style={styles.exercise}>
          {index + 1}. {exercise.name}
          {"\n"}
          Work: {exercise.workTime}s
          Rest: {exercise.restTime}s
        </Text>

      ))}


      <Pressable style={styles.button}>

        <Text style={styles.buttonText}>
          Save Workout
        </Text>

      </Pressable>


    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:25,
    justifyContent:"center"
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    marginBottom:30
  },

  subtitle:{
    marginTop:25,
    fontSize:20,
    fontWeight:"bold"
  },

  input:{
    borderWidth:1,
    padding:15,
    marginBottom:15,
    borderRadius:10
  },

  button:{
    padding:15,
    marginTop:15,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    fontSize:18,
    fontWeight:"bold"
  },

  exercise:{
    marginTop:15,
    fontSize:16
  }

});
