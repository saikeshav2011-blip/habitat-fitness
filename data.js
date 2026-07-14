// Habitᵃᵗ Fitness App Data

export const exercises = [
  {
    id: 1,
    name: "Jumping Jacks",
    muscles: [
      "Full Body",
      "Cardio"
    ],
    difficulty: "Beginner",
    variations: [
      "Low Impact Jumping Jacks",
      "Star Jumps"
    ],
    description:
      "A full-body movement that increases heart rate and improves coordination."
  },

  {
    id: 2,
    name: "Squats",
    muscles: [
      "Quadriceps",
      "Glutes",
      "Hamstrings"
    ],
    difficulty: "Beginner",
    variations: [
      "Bodyweight Squat",
      "Jump Squat",
      "Split Squat"
    ],
    description:
      "A lower-body exercise focused on leg strength and stability."
  },

  {
    id: 3,
    name: "Push-ups",
    muscles: [
      "Chest",
      "Shoulders",
      "Triceps",
      "Core"
    ],
    difficulty: "Beginner",
    variations: [
      "Knee Push-up",
      "Incline Push-up",
      "Diamond Push-up"
    ],
    description:
      "An upper-body exercise that builds pushing strength."
  }
];


export const savedWorkouts = [
  {
    id: 1,
    name: "Starter HIIT Workout",
    exercises: [
      {
        exerciseId: 1,
        workTime: 30,
        restTime: 15
      },
      {
        exerciseId: 2,
        workTime: 45,
        restTime: 15
      },
      {
        exerciseId: 3,
        workTime: 30,
        restTime: 15
      }
    ]
  }
];
