// Habitᵃᵗ Fitness Exercise Database


export const publicExercises = [

  {
    id: 1,
    name: "Jumping Jacks",

    muscles: [
      "Full Body",
      "Cardio"
    ],

    categories: [
      "HIIT",
      "No Equipment",
      "Beginner"
    ],

    equipment: [
      "None"
    ],

    difficulty: "Beginner",

    variations: [
      "Low Impact Jumping Jacks",
      "Star Jumps"
    ],

    description:
      "A full body movement used to increase heart rate and improve coordination."
  },


  {
    id: 2,
    name: "Squats",

    muscles: [
      "Quadriceps",
      "Glutes",
      "Hamstrings"
    ],

    categories: [
      "Strength",
      "Lower Body",
      "No Equipment"
    ],

    equipment:[
      "None"
    ],

    difficulty:"Beginner",

    variations:[
      "Jump Squat",
      "Split Squat"
    ],

    description:
      "A lower body exercise focused on leg strength and stability."
  },


  {
    id:3,
    name:"Push-ups",

    muscles:[
      "Chest",
      "Shoulders",
      "Triceps",
      "Core"
    ],

    categories:[
      "Strength",
      "Upper Body",
      "No Equipment"
    ],

    equipment:[
      "None"
    ],

    difficulty:"Beginner",

    variations:[
      "Knee Push-up",
      "Incline Push-up",
      "Diamond Push-up"
    ],

    description:
      "An upper body pushing movement that develops strength."
  }

];



// User-created exercises

export const privateExercises = [];



// Saved workouts

export const savedWorkouts = [];
