import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";

import { publicExercises } from "../data";


export default function ExerciseLibrary() {

  const [search, setSearch] = useState("");


  const filteredExercises = publicExercises.filter(
    (exercise) =>
      exercise.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  return (

    <ScrollView style={styles.container}>


      <Text style={styles.title}>
        Exercise Library
      </Text>


      <TextInput

        style={styles.search}

        placeholder="Search exercises"

        value={search}

        onChangeText={setSearch}

      />


      {
        filteredExercises.map((exercise) => (

          <View
            key={exercise.id}
            style={styles.card}
          >

            <Text style={styles.name}>
              {exercise.name}
            </Text>


            <Text>
              {exercise.description}
            </Text>


            <Text style={styles.label}>
              Muscles:
            </Text>

            <Text>
              {exercise.muscles.join(", ")}
            </Text>


            <Text style={styles.label}>
              Categories:
            </Text>

            <Text>
              {exercise.categories.join(", ")}
            </Text>


            <Text style={styles.label}>
              Equipment:
            </Text>

            <Text>
              {exercise.equipment.required.join(", ")}
            </Text>


            <Text style={styles.label}>
              Variations:
            </Text>

            <Text>
              {exercise.variations.join(", ")}
            </Text>


          </View>

        ))
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
    marginBottom:20
  },


  search:{
    borderWidth:1,
    padding:15,
    borderRadius:10,
    marginBottom:20
  },


  card:{
    borderWidth:1,
    padding:20,
    borderRadius:15,
    marginBottom:15
  },


  name:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:10
  },


  label:{
    marginTop:12,
    fontWeight:"bold"
  }

});
