import React from "react";

const Diet = () => {
  return (
    <div className="w-full px-8 flex flex-col items-center justify-center mb-10">
      <div className="border-2 flex flex-col items-center rounded-xl shadow-white shadow-md bg-muted">
        <p className="text-3xl font-bold mb-10 mt-10 text-foreground ">
          Diet Recommendation
        </p>
        <div className="w-[932px] pl-10 text-foreground pb-10">
          <ol className="list-decimal">
            <li>
              Caloric Surplus: Consume more calories than your body burns to
              promote weight gain. Aim for a surplus of around 500 calories per
              day.
            </li>
            <li>
              Protein-Rich Foods: Include lean meats, poultry, fish, eggs, dairy
              products, legumes, nuts, and seeds to support muscle growth and
              repair.
            </li>
            <li>
              Healthy Fats: Incorporate sources of healthy fats like avocados,
              nuts, seeds, olive oil, and fatty fish to increase calorie intake
              and support overall health.
            </li>
            <li>
              Complex Carbohydrates: Choose whole grains, fruits, vegetables,
              and legumes as sources of complex carbohydrates to provide
              sustained energy and meet increased calorie needs.
            </li>
            <li>
              Regular Meals and Snacks: Eat frequent meals and snacks throughout
              the day to ensure consistent calorie intake and support weight
              gain efforts.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Diet;
