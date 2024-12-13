import { CSpinner } from "@coreui/react";
import { useState, useEffect } from "react";
import LargeProdCard from "./LargeProdCard";
import { fetchPizzas } from "../services/PizzaApiService";
import sample_pizza from "./../assets/Landing/sample-pizza.jpg";

function PizzaLoader() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPizzas = async () => {
    try {
      const data = await fetchPizzas();
      if (Array.isArray(data)) {
        setPizzas(data);
      } else {
        console.error("Failed to load pizzas:", data);
      }
    } catch (error) {
      console.error("Error while fetching pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPizzas();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-3">
        <CSpinner />
        <p>Loading pizzas...</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {pizzas.map((pizza) => (
        <LargeProdCard
          key={pizza.pizzaId}
          header={pizza.pizzaName}
          pid={pizza.pizzaId}
          price={`Rs. ${pizza.price.toFixed(2)}`}
          image={sample_pizza} // Replace with pizza.image if available in the API
        />
      ))}
      {console.log(pizzas)}
    </ul>
  );
}

export default PizzaLoader;
