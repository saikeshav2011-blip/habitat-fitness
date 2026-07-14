// Habitᵃᵗ Fitness Data Structure
// Home workout focused exercise database


// PUBLIC EXERCISES
// Available to all users

export const publicExercises = [

  {
    id: 1,

    name: "Jumping Jacks",

    description:
      "A full-body cardio movement that increases heart rate and improves coordination.",

    instructions:
      "Stand tall, jump while moving arms and legs outward, then return to starting position.",


    muscles: [
      "Full Body",
      "Cardio"
    ],


    categories: [
      "HIIT",
      "Cardio",
      "No Equipment",
      "Beginner"
    ],


    equipment: {
      required: [
        "None"
      ],

      optional: [
        "Yoga Mat"
      ]
    },


    difficulty:
      "Beginner",


    variations: [
      "Low Impact Jumping Jacks",
      "Star Jumps"
    ]
  },


  {
    id: 2,

    name: "Bodyweight Squats",

    description:
      "A lower body exercise focused on leg strength and stability.",


    instructions:
      "Stand with feet shoulder width apart, lower hips down, then return to standing.",


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


    equipment: {
      required: [
        "None"
      ],

      optional: [
        "Dumbbells"
      ]
    },


    difficulty:
      "Beginner",


    variations: [
      "Jump Squat",
      "Split Squat",
      "Goblet Squat"
    ]
  },


  {
    id: 3,

    name: "Push-ups",

    description:
      "An upper body pushing movement that develops strength.",


    instructions:
      "Place hands under shoulders, lower chest toward the floor, then push back up.",


    muscles: [
      "Chest",
      "Shoulders",
      "Triceps",
      "Core"
    ],


    categories: [
      "Strength",
      "Upper Body",
      "No Equipment"
    ],


    equipment: {
      required: [
        "None"
      ],

      optional: [
        "Yoga Mat"
      ]
    },


    difficulty:
      "Beginner",


    variations: [
      "Knee Push-up",
      "Incline Push-up",
      "Diamond Push-up"
    ]
  },


  {
    id: 4,

    name: "Plank",

    description:
      "An isometric core exercise that builds stability.",


    instructions:
      "Hold a straight body position supported by your forearms and toes.",


    muscles: [
      "Core",
      "Shoulders"
    ],


    categories: [
      "Core",
      "Strength",
      "No Equipment"
    ],


    equipment: {
      required: [
        "None"
      ],

      optional: [
        "Yoga Mat"
      ]
    },


    difficulty:
      "Beginner",


    variations: [
      "Side Plank",
      "Plank Shoulder Taps"
    ]
  },


  {
    id: 5,

    name: "Mountain Climbers",

    description:
      "A cardio and core exercise combining movement and stability.",


    instructions:
      "Start in a plank position and drive knees toward your chest one at a time.",


    muscles: [
      "Core",
      "Shoulders",
      "Legs"
    ],


    categories: [
      "HIIT",
      "Cardio",
      "Core",
      "No Equipment"
    ],


    equipment: {
      required: [
        "None"
      ],

      optional: [
        "Yoga Mat"
      ]
    },


    difficulty:
      "Intermediate",


    variations: [
      "Slow Mountain Climbers",
      "Cross Body Mountain Climbers"
    ]
  }

];



// PRIVATE USER CREATED EXERCISES
// Only visible to the user unless submitted and approved

export const privateExercises = [];



// USER SUBMITTED EXERCISES
// Waiting for admin approval

export const exerciseSubmissions = [];



// SAVED WORKOUTS

export let savedWorkouts = [];



// SAMPLE WORKOUT TEMPLATES

export const sampleWorkouts = [

  {
    id: 1,

    name:
      "10 Minute Full Body Home Workout",


    goal:
      "Full Body",


    equipment:
      "No Equipment",


    exercises: [
      "Jumping Jacks",
      "Bodyweight Squats",
      "Push-ups",
      "Plank",
      "Mountain Climbers"
    ]
  }

];
