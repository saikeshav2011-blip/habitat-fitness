import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from "react-native";


export default function PrivateExerciseCreator() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [muscles, setMuscles] = useState("");
  const [categories, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState("");


  function saveExercise() {

    const exercise = {
      name,
      description,
      muscles,
      categories,
      difficulty,
      visibility: "private"
    };

    console.log(exercise);

  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Create Private Exercise
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Exercise Name *"
        value={name}
        onChangeText={setName}
      />


      <TextInput
        style={styles.input}
        placeholder="Description (optional)"
        value={description}
        onChangeText={setDescription}
      />


      <TextInput
        style={styles.input}
        placeholder="Muscle Groups (optional)"
        value={muscles}
        onChangeText={setMuscles}
      />


      <TextInput
        style={styles.input}
        placeholder="Categories (optional)"
        value={categories}
        onChangeText={setCategories}
      />


      <TextInput
        style={styles.input}
        placeholder="Difficulty (optional)"
        value={difficulty}
        onChangeText={setDifficulty}
      />


      <Pressable
        style={styles.button}
        onPress={saveExercise}
      >

        <Text style={styles.buttonText}>
          Save Private Exercise
        </Text>

      </Pressable>


      <Pressable style={styles.button}>

        <Text style={styles.buttonText}>
          Submit For Public Library Review
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
    fontSize:30,
    fontWeight:"bold",
    marginBottom:25
  },

  input:{
    borderWidth:1,
    padding:15,
    marginBottom:12,
    borderRadius:10
  },

  button:{
    padding:15,
    marginTop:15,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    fontSize:16,
    fontWeight:"bold"
  }

});
