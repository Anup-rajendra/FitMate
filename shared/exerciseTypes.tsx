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
    img: "/shoulder_press.png",
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
    "Bicycle Crunches": {
      description: `
    -> Lie flat on your back with hands behind your head and legs lifted off the ground, knees bent at a 90-degree angle.
    -> Alternate bringing your right elbow towards your left knee while extending your right leg straight out.
    -> Switch sides, bringing your left elbow towards your right knee while extending your left leg straight out.
    -> Continue alternating sides in a pedaling motion for desired repetitions.
`,
      img: "/bicycle.jpg",
    },
    "Reverse Lunges": {
      description: `
    -> Stand tall with feet together, hands on hips or by your sides.
    -> Take a step back with your right foot, lowering your body until both knees are bent at 90-degree angles.
    -> Push through your left heel to return to the starting position.
    -> Repeat on the other side, alternating legs for desired repetitions.
`,
      img: "/reverse-lunges.jpg",
    },
    "Hip Thrusts": {
      description: `
    -> Sit on the ground with your upper back against a bench and a barbell across your hips.
    -> Plant your feet flat on the ground hip-width apart, knees bent.
    -> Drive through your heels to lift your hips towards the ceiling until your body forms a straight line from shoulders to knees.
    -> Squeeze your glutes at the top, then lower back down with control.
`,
      img: "/Hip-Thrusts.jpg",
    },
    "Russian Twists": {
      description: `
    -> Sit on the ground with knees bent and feet lifted off the ground, holding a medicine ball in front of your chest.
    -> Lean back slightly and twist your torso to the right, tapping the medicine ball on the ground beside your hip.
    -> Twist to the left, tapping the ball on the ground beside your left hip.
`,
      img: "/russian-twists.jpeg",
    },
    "Single-Leg Deadlifts": {
      description: `
    -> Stand tall with feet hip-width apart, holding a dumbbell or kettlebell in your right hand.
    -> Shift your weight onto your left foot and hinge at the hips to lower the weight towards the ground.
    -> Keep your back flat and extend your right leg straight behind you for balance.
    -> Return to the starting position by squeezing your glutes and hamstrings.
    -> Repeat on the other side, alternating legs for desired repetitions.
`,
      img: "/Single-leg.jpg",
    },
    "Mountain Climbers": {
      description: `
    -> Start in a plank position with hands directly under shoulders and body in a straight line.
    -> Drive your right knee towards your chest, then quickly switch legs, bringing your left knee towards your chest.
    -> Continue alternating legs in a running motion for desired repetitions.
    -> Keep your core engaged and avoid letting your hips lift or sag.
`,
      img: "/mountain-climbers.jpg",
    },
    Superman: {
      description: `
    -> Lie face down on the ground with arms extended overhead and legs straight.
    -> Lift your arms, chest, and legs off the ground simultaneously, squeezing your lower back and glutes.
    -> Hold this position for a few seconds, then lower back down with control.
`,
      img: "/superman.jpg",
    },
    "Tricep Kickbacks": {
      description: `
    -> Stand with feet hip-width apart, holding a dumbbell in each hand with palms facing in.
    -> Hinge at the hips to bend forward, keeping your back flat and chest up.
    -> Bend your elbows to bring the weights towards your sides, then extend your arms straight back behind you, squeezing your triceps.
    -> Return to the starting position with control.
`,
      img: "/tricep-kickbacks.jpg",
    },
    "Box Jumps": {
      description: `
    -> Stand in front of a sturdy box or platform with feet hip-width apart.
    -> Bend your knees and swing your arms back, then explosively jump onto the box, landing softly with knees bent.
    -> Stand tall on top of the box, then step or jump back down to the starting position.
`,
      img: "/box-jumpes.jpg",
    },
  },
  overweight: {
    "Dumbbell Shoulder Press": {
      description: `
    -> Sit or stand with feet hip-width apart, holding dumbbells at shoulder height with palms facing forward.
    -> Press the dumbbells overhead by extending your arms, keeping your core engaged.
    -> Lower the dumbbells back to shoulder height with control.
`,
      img: "/shoulder_press.png",
    },
    "Lateral Raises": {
      description: `
    -> Stand tall with feet hip-width apart, holding dumbbells at your sides with palms facing in.
    -> Keeping a slight bend in your elbows, raise the dumbbells out to the sides until they are at shoulder height.
    -> Pause briefly at the top, then lower the dumbbells back down with control.
`,
      img: "/lateral-raise.jpg",
    },
    "Leg Raises": {
      description: `
    -> Lie flat on your back with legs extended and hands under your glutes for support.
    -> Keeping your legs straight, lift them towards the ceiling until they are perpendicular to the ground.
    -> Slowly lower your legs back down towards the ground without letting them touch.
    -> Repeat for desired repetitions, keeping your
`,
      img: "/legraises.jpg",
    },
    "Chest Press": {
      description: `
    -> Lie on a flat bench with a dumbbell in each hand, palms facing forward.
    -> Press the dumbbells straight up over your chest, then lower them back down with control.
    -> Perform 10-15 repetitions for 2-3 sets.
`,
      img: "/chest-press.jpg",
    },
    "Lat Pulldowns": {
      description: `
    -> Sit at a lat pulldown machine with hands gripping the bar overhead, slightly wider than shoulder-width apart.
    -> Pull the bar down towards your chest, then slowly release it back up.
    -> Perform 10-15 repetitions for 2-3 sets.
`,
      img: "/lat-pull-downs.jpeg",
    },
    "Bench Press": {
      description: `-> Lie flat on a bench with your feet planted firmly on the ground.
    -> Grip the barbell with hands slightly wider than shoulder-width apart.
    -> Lower the barbell to your chest, keeping your elbows close to your body.
    -> Press the barbell back up to the starting position, fully extending your arms.
`,
      img: "/weightlifting.jpg",
    },
    "Bicycle Crunches": {
      description: `
    -> Lie flat on your back with hands behind your head and legs lifted off the ground, knees bent at a 90-degree angle.
    -> Alternate bringing your right elbow towards your left knee while extending your right leg straight out.
    -> Switch sides, bringing your left elbow towards your right knee while extending your left leg straight out.
    -> Continue alternating sides in a pedaling motion for desired repetitions.
`,
      img: "/bicycle.jpg",
    },
    Squats: {
      description: `
    -> Stand with feet shoulder-width apart, toes slightly pointed out.->Lower your body by bending your knees and pushing your hips back, as if sitting back into a chair.
    -> Keep your chest up and back straight, and lower until your thighs are parallel to the ground.
    -> Push through your heels to return to the starting position.`,
      img: "/squat.jpg",
    },
    "Stair Climbing": {
      description: `
    -> Use a stair climber machine or climb stairs at home or in a public space.
    -> Start with 5-10 minutes of stair climbing and gradually increase duration.`,
      img: "/Climbing-Stairs.webp",
    },
    Superman: {
      description: `
    -> Lie face down on the ground with arms extended overhead and legs straight.
    -> Lift your arms, chest, and legs off the ground simultaneously, squeezing your lower back and glutes.
    -> Hold this position for a few seconds, then lower back down with control.
`,
      img: "/superman.jpg",
    },
  },
  obese: {
    Walking: {
      description: `
    -> Start with brisk walking for 20-30 minutes at a comfortable pace.
    -> Gradually increase duration and intensity as endurance improves.
`,
      img: "/walking.jpg",
    },
    Swimming: {
      description: `
    -> Swim laps in a pool or engage in water aerobics for a low-impact, full-body workout.
    -> Aim for 20-30 minutes of continuous swimming.
`,
      img: "/swimming.jpg",
    },
    "Elliptical Trainer": {
      description: `
    -> Use an elliptical machine at the gym for a low-impact, full-body workout.
    -> Aim for 20-30 minutes of continuous elliptical training.
`,
      img: "/elliptical-trainer.webp",
    },
    "Jump Rope": {
      description: `
    -> Jump rope for intervals of 1-2 minutes, alternating with rest periods.
    -> Gradually increase intensity and duration as endurance improves.
`,
      img: "/best-jump-rope-exercises.png",
    },
    "Stair Climbing": {
      description: `
    -> Use a stair climber machine or climb stairs at home or in a public space.
    -> Start with 5-10 minutes of stair climbing and gradually increase duration.`,
      img: "/Climbing-Stairs.webp",
    },
    Burpees: {
      description: `
    -> Start standing, then squat down and place your hands on the floor.
    -> Jump your feet back into a plank position.
    -> Perform a push-up, then jump your feet back to the squat position.
    -> Explosively jump up, reaching your arms overhead.
    -> Land softly and repeat.
    -> Burpees are a full-body exercise combining strength and cardio.`,
      img: "/Burpees.webp",
    },
    "Jumping Jacks": {
      description: `
    -> Begin with feet together and arms at your sides.
    -> Jump feet out to the sides while raising arms overhead.
    -> Return to starting position with feet together and arms down.
    -> Repeat continuously.
    -> Jumping jacks elevate heart rate and engage multiple muscles.`,
      img: "/jumping_jacks.jpg",
    },
    "Dancing/ZUMBA": {
      description: `
    -> Take a dance class or dance at home to your favorite music.
    -> Dance continuously for 20-30 minutes, focusing on moving your entire body.
   `,
      img: "/zumba.jpg",
    },
    "Rowing Machine": {
      description: `
    -> Use a rowing machine at the gym for a full-body cardio workout.
    -> Row continuously for 20-30 minutes, focusing on proper form and technique.
   `,
      img: "/rowing.webp",
    },
    "Dumbbell Squats": {
      description: `
    -> Hold a pair of dumbbells at your sides and stand with feet shoulder-width apart.
    -> Lower into a squat position, keeping your chest up and back straight.
    -> Push through your heels to return to the starting position.
    -> Perform 10-15 repetitions for 2-3 sets.
   `,
      img: "/squat-with-weights.webp",
    },
  },
};
