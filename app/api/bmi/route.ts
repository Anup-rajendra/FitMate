 

const calculateBMI = (height: number, weight: number): number => {
  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  const bmi = weight / (heightInMeters * heightInMeters);

  return parseFloat(bmi.toFixed(1));
};
 
export async function POST(req: Request) {
  try {
    const temp = await req. json();
    console.log(temp)
    const height = Number(temp.height);
    const weight = Number(temp.weight);
    // Perform BMI calculation
    const bmi = calculateBMI(height, weight);
    const age=Number(temp.age);
    // Return the BMI value in the response
    const send={
      age,height,weight
    }
    console.log(send);
    return Response.json(bmi);
  } catch (error) {
    console.error("Error during BMI calculation:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
