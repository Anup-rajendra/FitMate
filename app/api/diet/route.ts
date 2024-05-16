export async function GET(req: Request) {
  try {
    const category = await req.headers.get("Category");
    const bmi = await req.headers.get("Bmi");
    const diet = `A diet recommendation should be tailored to an individual's specific nutritional needs, health status, and fitness goals. For someone classified as underweight, the focus should be on increasing caloric intake with nutrient-dense foods to gain weight healthily. This includes incorporating more lean proteins, whole grains, healthy fats, and calorie-dense snacks throughout the day. For individuals within a normal weight range, maintaining a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, coupled with regular physical activity, is advisable. Those categorized as overweight or obese might benefit from reducing caloric intake, focusing on whole foods, and increasing physical activity to promote weight loss. Always consult with a healthcare provider or dietitian to tailor dietary recommendations to your personal health needs and goals. 
    category=${category}
    bmi=${bmi}
    `;
    return Response.json(diet);
  } catch (error) {
    console.error("Error during BMI calculation:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
