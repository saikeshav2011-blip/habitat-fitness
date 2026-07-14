import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from "react-native";

import { savedWorkouts } from "../data";


export default function SavedWorkouts() {


  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        My Saved Workouts
      </Text>


      {
        savedWorkouts.length === 0 ? (

          <Text style={styles.empty}>
            No saved workouts yet.
          </Text>

        ) : (

          savedWorkouts.map((workout) => (

            <View
              key={workout.id}
              style={styles.card}
            >

              <Text style={styles.workoutName}>
                {workout.name}
              </Text>


              <Text>
                {workout.exercises.length} exercises
              </Text>


              <Pressable
                style={styles.button}
              >

                <Text style={styles.buttonText}>
                  Start Workout
                </Text>

              </Pressable>


            </View>

          ))

        )
      }


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
    marginBottom:25
  },


  empty:{
    fontSize:18
  },


  card:{
    borderWidth:1,
    padding:20,
    borderRadius:15,
    marginBottom:15
  },


  workoutName:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:10
  },


  button:{
    marginTop:15,
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },


  buttonText:{
    fontWeight:"bold",
    fontSize:16
  }

});
