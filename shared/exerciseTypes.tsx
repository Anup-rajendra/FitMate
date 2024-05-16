import React from "react";
export type division = {
  [exercises: string]: {
    description: string;
    img: string;
  };
};
export type AllExercise = {
  [type: string]: division;
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
  "Bent Over Rows": {
    description: `
    -> Stand with feet hip-width apart, holding a barbell or dumbbells in front of you with an overhand grip.
    -> Hinge at the hips to bend forward, keeping your back flat and chest up.
    -> Pull the weight towards your lower ribcage by bending your elbows and squeezing your shoulder blades together.
    -> Lower the weight back down with control to the starting position.
`,
    img: "/bent-over-row.jpg",
  },
  "Shoulder Press": {
    description: `
    -> Sit or stand with feet hip-width apart, holding dumbbells at shoulder height with palms facing forward.
    -> Press the dumbbells overhead by extending your arms, keeping your core engaged.
    -> Pause at the top, then slowly lower the dumbbells back to shoulder height.
`,
    img: "/Overhead-Shoulder-Press.jpg",
  },
  "Dumbbell Flyers": {
    description: `
    -> Lie flat on a bench with a dumbbell in each hand, palms facing inward.
    -> Extend your arms straight up over your chest, slightly bending your elbows.
    -> Lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows.
    -> Squeeze your chest muscles to bring the dumbbells back to the starting position.
`,
    img: "/Dumbell_fly.jpg",
  },
  "Tricep Dips": {
    description: `
    -> Sit on the edge of a sturdy chair or bench with your hands gripping the edge beside your hips.
    -> Walk your feet forward until your knees are bent at a 90-degree angle.
    -> Lift your hips off the chair and lower your body towards the ground by bending your elbows.
    -> Keep your elbows close to your body and lower until your upper arms are parallel to the ground.
    -> Push through your palms to extend your arms and return to the starting position.
`,
    img: "/TricepDips.jpg",
  },
  "Russian Twists": {
    description: `
    -> Sit on the ground with knees bent and feet flat, holding a weight or medicine ball in front of you.
    -> Lean back slightly and lift your feet off the ground, balancing on your tailbone.
    -> Twist your torso to the right, bringing the weight or ball towards the ground beside your hip.
    -> Keep your elbows close to your body and lower until your upper arms are parallel to the ground.
    -> Return to the center and then twist to the left, bringing the weight or ball towards the ground beside your left hip.
`,
    img: "/russian-twists.jpg",
  },
};
export const normalweight: division = {
  Planks: {
    description: `
    -> Start in a push-up position with hands directly under shoulders and feet hip-width apart.
    -> Engage your core and keep your body in a straight line from head to heels.
    -> Twist your torso to the right, bringing the weight or ball towards the ground beside your hip.
    -> Hold this position for as long as possible, aiming for 30 seconds to 1 minute.
    -> Avoid sagging or arching your back.
`,
    img: "/planks.jpg",
  },
};
export const AllWeights: AllExercise = {
  underweight: {
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
    "Bent Over Rows": {
      description: `
    -> Stand with feet hip-width apart, holding a barbell or dumbbells in front of you with an overhand grip.
    -> Hinge at the hips to bend forward, keeping your back flat and chest up.
    -> Pull the weight towards your lower ribcage by bending your elbows and squeezing your shoulder blades together.
    -> Lower the weight back down with control to the starting position.
`,
      img: "/bent-over-row.jpg",
    },
    "Shoulder Press": {
      description: `
    -> Sit or stand with feet hip-width apart, holding dumbbells at shoulder height with palms facing forward.
    -> Press the dumbbells overhead by extending your arms, keeping your core engaged.
    -> Pause at the top, then slowly lower the dumbbells back to shoulder height.
`,
      img: "/Overhead-Shoulder-Press.jpg",
    },
    "Dumbbell Flyers": {
      description: `
    -> Lie flat on a bench with a dumbbell in each hand, palms facing inward.
    -> Extend your arms straight up over your chest, slightly bending your elbows.
    -> Lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows.
    -> Squeeze your chest muscles to bring the dumbbells back to the starting position.
`,
      img: "/Dumbell_fly.jpg",
    },
    "Tricep Dips": {
      description: `
    -> Sit on the edge of a sturdy chair or bench with your hands gripping the edge beside your hips.
    -> Walk your feet forward until your knees are bent at a 90-degree angle.
    -> Lift your hips off the chair and lower your body towards the ground by bending your elbows.
    -> Keep your elbows close to your body and lower until your upper arms are parallel to the ground.
    -> Push through your palms to extend your arms and return to the starting position.
`,
      img: "/TricepDips.jpg",
    },
    "Russian Twists": {
      description: `
    -> Sit on the ground with knees bent and feet flat, holding a weight or medicine ball in front of you.
    -> Lean back slightly and lift your feet off the ground, balancing on your tailbone.
    -> Twist your torso to the right, bringing the weight or ball towards the ground beside your hip.
    -> Keep your elbows close to your body and lower until your upper arms are parallel to the ground.
    -> Return to the center and then twist to the left, bringing the weight or ball towards the ground beside your left hip.
`,
      img: "/russian-twists.jpg",
    },
  },
  normalweight: {
    Planks: {
      description: `
    -> Start in a push-up position with hands directly under shoulders and feet hip-width apart.
    -> Engage your core and keep your body in a straight line from head to heels.
    -> Twist your torso to the right, bringing the weight or ball towards the ground beside your hip.
    -> Hold this position for as long as possible, aiming for 30 seconds to 1 minute.
    -> Avoid sagging or arching your back.
`,
      img: "/planks.jpg",
    },
  },
  overweight: {},
  obese: {},
};
