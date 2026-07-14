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
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />


      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Add Exercise
        </Text>
      </Pressable>


      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Save Workout
        </Text>
      </Pressable>


      <Text style={styles.preview}>
        Workout Preview:
        {"\n\n"}

        {workoutName}

        {"\n"}

        {exerciseName}

      </Text>


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


  input:{
    borderWidth:1,
    padding:15,
    marginBottom:15,
    borderRadius:10
  },


  button:{
    padding:15,
    marginTop:10,
    borderRadius:10,
    alignItems:"center"
  },


  buttonText:{
    fontSize:18,
    fontWeight:"bold"
  },


  preview:{
    marginTop:30,
    fontSize:18
  }

});
