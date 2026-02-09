import type { Ingredients } from "../types";

interface ChaiContentProps {
  ingredients: Ingredients[];
  isHealthy?: boolean; // optional override
}

const ChaiContent = ({ ingredients, isHealthy }: ChaiContentProps) => {
  const totalCalories = ingredients.reduce(
    (sum, item) => sum + (item.calories ?? 0),
    0,
  );

  const computedHealthy = totalCalories <= 200;

  const healthy = isHealthy !== undefined ? isHealthy : computedHealthy;

  return (
    <section>
      <h4>Chai Contents</h4>
      <p>totalCalories : {totalCalories}</p>

      <p>{healthy ? "✅ Healthy choice" : "⚠️ Not very healthy"}</p>

      <div>
        <p>Ingredients:</p>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>

              {item.quantity && <p>{item.quantity} quantity</p>}

              {item.calories !== undefined && (
                <p>
                  {item.calories} ❤️‍🩹 <span>Calories</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChaiContent;
