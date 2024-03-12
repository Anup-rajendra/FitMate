 

const calculateBMI = (height: number, weight: number): number => {
  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  const bmi = weight / (heightInMeters * heightInMeters);

  return parseFloat(bmi.toFixed(1));
};
 
export async function POST(req: Request) {
  try {
    const temp = await req.json();
    const height1 = Number(temp.height1);
    const height2 = Number(temp.height2);
    const weight1 = Number(temp.weight1);
    const heightInCm = (height1 * 30.48) + (height2 * 2.54);

    // Convert weight from pounds to kilograms
    const weightInKg = weight1 * 0.453592;
    const bmi = calculateBMI(heightInCm,weightInKg);

    // Return the BMI value in the response
    return Response.json(bmi);
  } catch (error) {
    console.error("Error during BMI calculation:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
