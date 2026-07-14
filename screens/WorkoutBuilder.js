import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native";

import { publicExercises, savedWorkouts } from "../data";


export default function WorkoutBuilder() {

  const [workoutName, setWorkoutName] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);

  function saveWorkout(){

  if(workoutName.trim() === ""){
    return;
  }


  savedWorkouts.push({

    id: Date.now(),

    name: workoutName,

    exercises: selectedExercises

  });


  console.log(savedWorkouts);

}


  function addExercise(exercise) {

    setSelectedExercises([
      ...selectedExercises,
      exercise
    ]);

  }


  return (

    <ScrollView style={styles.container}>


      <Text style={styles.title}>
        Create Workout
      </Text>


      <TextInput

        style={styles.input}

        placeholder="Workout Name"

        value={workoutName}

        onChangeText={setWorkoutName}

      />


      <Text style={styles.sectionTitle}>
        Exercise Library
      </Text>


      {
        publicExercises.map((exercise) => (

          <Pressable

            key={exercise.id}

            style={styles.exerciseCard}

            onPress={() => addExercise(exercise)}

          >

            <Text style={styles.exerciseName}>
              {exercise.name}
            </Text>


            <Text>
              Muscles:
              {" "}
              {exercise.muscles.join(", ")}
            </Text>


            <Text>
              Equipment:
              {" "}
              {exercise.equipment.required.join(", ")}
            </Text>


          </Pressable>

        ))
      }



      <Text style={styles.sectionTitle}>
        Your Workout
      </Text>


      {
        selectedExercises.map((exercise, index) => (

          <View
            key={index}
            style={styles.selectedCard}
          >

            <Text>
              {index + 1}. {exercise.name}
            </Text>

          </View>

        ))
      }



    <Pressable
  style={styles.saveButton}
  onPress={saveWorkout}
>

  <Text style={styles.saveText}>
    Save Workout
  </Text>

</Pressable>

    </ScrollView>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20
  },


  title:{
    fontSize:32,
    fontWeight:"bold",
    marginBottom:20
  },


  sectionTitle:{
    fontSize:22,
    fontWeight:"bold",
    marginTop:25,
    marginBottom:10
  },


  input:{
    borderWidth:1,
    padding:15,
    borderRadius:10
  },


  exerciseCard:{
    borderWidth:1,
    padding:15,
    borderRadius:12,
    marginBottom:10
  },


  exerciseName:{
    fontSize:18,
    fontWeight:"bold"
  },


  selectedCard:{
    padding:12,
    borderWidth:1,
    borderRadius:10,
    marginBottom:8
  },


  saveButton:{
    padding:18,
    marginTop:25,
    borderRadius:12,
    alignItems:"center"
  },


  saveText:{
    fontSize:18,
    fontWeight:"bold"
  }

});
