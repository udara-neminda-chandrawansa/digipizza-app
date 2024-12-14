import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useState } from "react";
import { savePizza } from "../services/PizzaApiService";

function BuildPizza({ userDTO }) {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0); // 0: Crusts, 1: Sauces
  const [pizzaData, setPizzaData] = useState({
    name: "",
    description: "",
    crust: "thin-crust",
    sauce: "tomato-sauce",
    topping: "no-toppings",
    cheese: "parmesan",
  });
  const [price, setPrice] = useState(1350);
  const [priceCalculated, setPriceCalculated] = useState(false);

  const crustsDialog = (
    <div>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="crusts"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select a crust option
        </label>
        <select
          id="crusts"
          value={pizzaData.crust}
          onChange={(e) => {
            const value = e.target.value;
            setPizzaData((prev) => ({ ...prev, crust: value }));
            console.log(value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="thin-crust">Thin Crust</option>
          <option value="stuffed-crust">Stuffed Crust</option>
          <option value="pan-crust">Pan Crust</option>
          <option value="hand-tossed">Hand-Tossed</option>
          <option value="cheese-burst">Cheese Burst</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </form>
    </div>
  );

  const saucesDialog = (
    <div>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="sauces"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select a sauce option
        </label>
        <select
          id="sauces"
          value={pizzaData.sauce}
          onChange={(e) => {
            const value = e.target.value;
            setPizzaData((prev) => ({ ...prev, sauce: value }));
            console.log(value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="tomato-sauce">Tomato Sauce</option>
          <option value="garlic-sauce">Garlic Sauce</option>
          <option value="bbq-sauce">BBQ Sauce</option>
          <option value="pesto-sauce">Pesto Sauce</option>
          <option value="alfredo-sauce">Alfredo Sauce</option>
        </select>
      </form>
    </div>
  );

  const toppingsDialog = (
    <div>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Select a toppings option
        </label>
        <select
          id="toppings-1"
          value={pizzaData.topping}
          onChange={(e) => {
            const value = e.target.value;
            setPizzaData((prev) => ({ ...prev, topping: value }));
            console.log(value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="no-toppings">No Toppings</option>
          <option value="basil">Basil</option>
          <option value="pepperoni">Pepperoni</option>
          <option value="bell-peppers">Bell Peppers</option>
          <option value="grilled-chicken">Grilled Chicken</option>
          <option value="tomatoes">Tomatoes</option>
          <option value="caramelized-onions">Caramelized Onions</option>
          <option value="pineapple">Pineapple</option>
        </select>
      </form>
    </div>
  );

  const cheeseDialog = (
    <div>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Select a cheese option
        </label>
        <select
          id="toppings-1"
          value={pizzaData.cheese}
          onChange={(e) => {
            const value = e.target.value;
            setPizzaData((prev) => ({ ...prev, cheese: value }));
            console.log(value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="parmesan">Parmesan</option>
          <option value="cheddar">Cheddar</option>
          <option value="provolone">Provolone</option>
          <option value="gouda">Gouda</option>
          <option value="feta">Feta</option>
          <option value="mozzarella">Mozzarella</option>
          <option value="blue-cheese">Blue Cheese</option>
          <option value="swiss">Swiss</option>
        </select>
      </form>
    </div>
  );
  const calculatePrice = () => {
    let total = 0;
    switch (pizzaData.crust) {
      case "thin-crust":
        total += 500;
        break;
      case "stuffed-crust":
        total += 300;
        break;
      case "pan-crust":
        total += 520;
        break;
      case "hand-tossed":
        total += 650;
        break;
      case "cheese-burst":
        total += 800;
        break;
      default:
        total += 200;
        break;
    }
    switch (pizzaData.sauce) {
      case "tomato-sauce":
        total += 300;
        break;
      case "garlic-sauce":
        total += 200;
        break;
      case "bbq-sauce":
        total += 120;
        break;
      case "pesto-sauce":
        total += 340;
        break;
      default:
        total += 400;
        break;
    }
    switch (pizzaData.topping) {
      case "no-toppings":
        total += 0;
        break;
      case "basil":
        total += 100;
        break;
      case "pepperoni":
        total += 320;
        break;
      case "bell-peppers":
        total += 250;
        break;
      case "grilled-chicken":
        total += 400;
        break;
      case "tomatoes":
        total += 350;
        break;
      case "caramelized-onions":
        total += 300;
        break;
      default:
        total += 380;
        break;
    }
    switch (pizzaData.cheese) {
      case "parmesan":
        total += 200;
        break;
      case "cheddar":
        total += 100;
        break;
      case "provolone":
        total += 300;
        break;
      case "gouda":
        total += 250;
        break;
      case "feta":
        total += 300;
        break;
      case "mozzarella":
        total += 340;
        break;
      case "blue-cheese":
        total += 500;
        break;
      default:
        total += 680;
        break;
    }
    setPrice(total);
    console.log("Price calculated:", total);
  };

  const getCurrentDialog = () => {
    switch (step) {
      case 0:
        return crustsDialog;
      case 1:
        return saucesDialog;
      case 2:
        return toppingsDialog;
      case 3:
        return cheeseDialog;
      default:
        if (!priceCalculated) {
          calculatePrice(); // Call it once
          setPriceCalculated(true);
        }
        return <div>Finished Customizing!</div>;
    }
  };

  const getModalTitle = () => {
    switch (step) {
      case 0:
        return "Select Crusts";
      case 1:
        return "Select Sauces";
      case 2:
        return "Select Toppings";
      case 3:
        return "Select Cheese";
      default:
        return "Done!";
    }
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1); // Proceed to the next step
    else setVisible(false); // Close the modal after the last step
  };

  const isNextDisabled = () => {
    switch (step) {
      case 0:
        return !pizzaData.crust; // Disable if no crust selected
      case 1:
        return !pizzaData.sauce; // Disable if no sauce selected
      case 2:
        return !pizzaData.topping; // Disable if no topping selected
      case 3:
        return !pizzaData.cheese; // Disable if no cheese selected
      default:
        return false;
    }
  };

  ///
  ///   CONT. FROM HERE (handleSavePizza)
  ///
  const handleSavePizza = async (e) => {
    if (
      pizzaData.name !== "" &&
      pizzaData.description !== "" &&
      pizzaData.crust !== "" &&
      pizzaData.sauce !== "" &&
      pizzaData.topping !== "" &&
      pizzaData.cheese !== ""
    ) {
      try {
        const res = await savePizza(userDTO);
        console.log("Pizza saved successfully:", res);
        alert("Pizza saved successfull!");
      } catch (error) {
        console.error("Error saving pizza:", error);
      }
    } else {
      alert("Invalid Inputs!");
    }
  };

  return (
    <div className="flex flex-col flex-grow w-full gap-6 p-6 max-sm:p-2">
      <h3 className="w-full max-sm:text-base max-sm:text-center">
        Hi {userDTO.username}! Let's order a Pizza!
      </h3>
      <button
        onClick={() => {
          setStep(0); // Start from the first step
          setVisible(true);
        }}
        className="block w-full rounded bg-[#EC0000] no-underline px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#EC0000] focus:outline-none focus:ring active:bg-rose-500"
      >
        Start Making a Custom Pizza
      </button>
      {/*Table container*/}
      <div className="relative w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right max-sm:text-xs">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300">Pizza Name</th>
              <th className="p-2 border border-gray-300">Description</th>
              <th className="p-2 border border-gray-300">Crust Selection</th>
              <th className="p-2 border border-gray-300">Sause Selection</th>
              <th className="p-2 border border-gray-300">Toppings Selection</th>
              <th className="p-2 border border-gray-300">Cheese Selection</th>
              <th className="p-2 border border-gray-300">Price</th>
              <th className="p-2 border border-gray-300">Controls</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  name="pizzaName"
                  id="pizzaName"
                  value={pizzaData.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPizzaData((prev) => ({ ...prev, name: value }));
                    //console.log(value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[100px]"
                  placeholder="Give it a name"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  name="pizzaDesc"
                  id="pizzaDesc"
                  value={pizzaData.description}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPizzaData((prev) => ({ ...prev, description: value }));
                    //console.log(value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[100px]"
                  placeholder="Give it a description"
                />
              </td>
              <td className="p-2 border border-gray-300">{pizzaData.crust}</td>
              <td className="p-2 border border-gray-300">{pizzaData.sauce}</td>
              <td className="p-2 border border-gray-300">
                {pizzaData.topping}
              </td>
              <td className="p-2 border border-gray-300">{pizzaData.cheese}</td>
              <td className="p-2 border border-gray-300">Rs. {price}/=</td>
              <td className="flex flex-col gap-2 p-2 border border-gray-300 w-fit">
                <button
                  onClick={() => handleSavePizza()}
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-lg focus:outline-none hover:bg-green-300 focus:ring-4 focus:ring-blue-300"
                >
                  Save Pizza
                </button>
                <button className="px-3 py-2 text-xs font-medium text-center text-white bg-red-600 rounded-lg focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-300">
                  Add to invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{getModalTitle()}</CModalTitle>
        </CModalHeader>
        <CModalBody>{getCurrentDialog()}</CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={handleNext}
            disabled={isNextDisabled()} // Disable if no selection made
          >
            {step < 4 ? "Next" : "Finish"}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default BuildPizza;
