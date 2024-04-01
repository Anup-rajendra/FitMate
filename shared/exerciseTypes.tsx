import React from "react";
type division = {
  [exercises: string]: {
    description: string;
    img: string;
  };
};

export const underweight: division = {
  Squats: {
    description: `
    -> Stand with feet shoulder-width apart, toes slightly pointed out.->Lower your body by bending your knees and pushing your hips back, as if sitting back into a chair.
    -> Keep your chest up and back straight, and lower until your thighs are parallel to the ground.
    -> Push through your heels to return to the starting position.`,
    img: "/squat.jpg",
  },
  Deadlifts: {
    description: `
    -> Stand with feet hip-width apart, toes pointing forward, and a barbell or dumbbells in front of you.
    -> Bend at the hips and knees to grip the barbell or dumbbells with an overhand grip.
    -> Keep your back straight and chest up as you lift the weight by extending your hips and knees.
    -> Stand tall, then slowly lower the weight back down to the ground.
`,
    img: "/deadlift.jpg",
  },
  "Bench Press": {
    description: `-> Lie flat on a bench with your feet planted firmly on the ground.
    -> Grip the barbell with hands slightly wider than shoulder-width apart.
    -> Lower the barbell to your chest, keeping your elbows close to your body.
    -> Press the barbell back up to the starting position, fully extending your arms.
`,
    img: "/weightlifting.jpg",
  },
  "Pull Ups": {
    description: `
    -> Grip an overhead bar with hands 
    -> Hang with your arms fully extended and engage your core.
    -> Pull your body up towards the bar by bending your elbows and squeezing your shoulder blades together.
    -> Lower yourself back down with control to the starting position.
`,
    img: "/pullup.jpg",
  },
  Lunges: {
    description: `
    -> Stand tall with feet hip-width apart, holding dumbbells at your sides.
    -> Take a step forward with one foot and lower your body until both knees are bent at 90-degree angles.
    -> Keep your front knee aligned with your ankle and your back knee just above the ground.
    -> Push through your front heel to return to the starting position.
`,
    img: "/lunges.jpg",
  },
};
