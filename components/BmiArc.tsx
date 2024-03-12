// import React, { useState, useEffect, useRef } from "react";
// import "@/app/globals.css";
// // Interface for BMI prop with type checking
// interface BmiArcProps {
//   bmi: number;
// }

// const BmiArc: React.FC<BmiArcProps> = ({ bmi }) => {
//   const [indicatorPosition, setIndicatorPosition] = useState(0); // Initial position (0%)
//   const arcRef = useRef(null);

//   useEffect(() => {
//     // Animate the indicator based on BMI value (0% to 100%)
//     const animationDuration = 2000; // Adjust animation duration (ms)
//     const animationSteps = 100; // Number of animation steps
//     const stepDuration = animationDuration / animationSteps;

//     let currentStep = 0;
//     let intervalId = setInterval(() => {
//       if (currentStep === animationSteps) {
//         clearInterval(intervalId);
//         return;
//       }

//       const newPosition = (bmi / 30) * 100; // Map BMI to percentage (0-100%)
//       setIndicatorPosition(newPosition);
//       currentStep++;
//     }, stepDuration);

//     return () => clearInterval(intervalId);
//   }, [bmi]); // Re-run effect when bmi changes

//   return (
//     <div className="relative w-64 h-64">
//       <div className="bmi-arc">
//         <div className="semi-circle"></div>
//         <div className="semi-circle"></div>
//       </div>
//       {/* <div
//         className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4 h-4 rounded-full shadow-md animate-ping origin-center duration-2000`}
//         style={{ transform: `rotate(${indicatorPosition}deg)` }} // Rotate indicator based on BMI
//       /> */}
//     </div>
//   );
// };

// export default BmiArc;