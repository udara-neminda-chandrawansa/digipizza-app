import { useState, useEffect } from "react";
import { fetchPizzaByID } from "../services/PizzaApiService";
import sample_pizza from "./../assets/Landing/sample-pizza.jpg";
import { CSpinner } from "@coreui/react";

function Product({ pid }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [pizzaDTO, setPizzaDTO] = useState({
    pizzaId: "",
    pizzaName: "",
    crusts: "",
    sauces: "",
    toppings: "",
    cheeses: "",
    description: "",
    price: "",
  });

  const handleFetchPizzaByID = async () => {
    if (pid) {
      try {
        const res = await fetchPizzaByID(pid);
        if (res !== "Error fetching pizza.") {
          setPizzaDTO(res);
        } else {
          setResponse("Error fetching pizza.");
        }
      } catch (error) {
        console.error("Error fetching pizza:", error);
        setResponse("Error fetching pizza.");
      } finally {
        setLoading(false);
      }
      console.log(response);
    } else {
      alert("Pizza ID is missing.");
    }
  };

  useEffect(() => {
    handleFetchPizzaByID();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-3 p-6">
        <CSpinner />
        <p>Loading pizza...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center flex-grow gap-3 p-12">
      <span className="flex items-end justify-between">
        <button className="bg-[#EC0000] p-2 text-white shadow transition hover:bg-[#FFA100] rounded-lg h-fit">
          Order Now
        </button>
        <img src={sample_pizza} alt="" className="w-[200px] rounded-full" />
      </span>
      <div className="flow-root border">
        <dl className="-my-3 text-sm divide-y divide-gray-100">
          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Pizza Name</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              {pizzaDTO.pizzaName}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Cheeses</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              {pizzaDTO.cheeses} cheese
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Crusts</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              {pizzaDTO.crusts} crust
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Sauces</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              {pizzaDTO.sauces}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Toppings</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              with {pizzaDTO.toppings} toppings
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Price</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              for {pizzaDTO.price}/=
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="p-1 font-medium text-gray-900">Description</dt>
            <dd className="p-1 text-gray-700 sm:col-span-2">
              {pizzaDTO.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Product;
