import { useState } from "react";

const SolarCalculator = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Monthly Electricity Consumption Units"
  );
  const [roofArea, setRoofArea] = useState("");
  const [roofAreaPercentage, setRoofAreaPercentage] = useState("");
  const [consumption, setConsumption] = useState("");
  const [electricityCost, setElectricityCost] = useState("");
  const [result, setResult] = useState(null);
  const [plantSize, setPlantSize] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setRoofArea("");
    setRoofAreaPercentage("");
    setConsumption("");
    setElectricityCost("");
    setResult(null);
    setPlantSize(null);
  };

  const calculate = () => {
    let annualSaving = 0;
    let calculatedPlantSize = 0;

    if (selectedOption === "Monthly Electricity Consumption Units") {
      const totalUnitsPerAnnum = 12 * parseFloat(consumption || 0); // Total yearly units
      const unitsPerKWPerMonth = 120; // Assumed generation of 1 kW plant in units per month

      if (consumption && electricityCost) {
        annualSaving = totalUnitsPerAnnum * parseFloat(electricityCost);
        calculatedPlantSize = parseFloat(consumption) / unitsPerKWPerMonth; // Plant size in kW
      }
    } else if (selectedOption === "Total Area of the Rooftop") {
      const totalUnitsPerAnnum = 12 * 100; // Assuming 100 units per month
      const areaPerKW = 10; // Assumed area (in sq. meters) required for 1 kW plant

      if (roofArea && electricityCost) {
        const availableArea =
          (parseFloat(roofArea) * (parseFloat(roofAreaPercentage || 100))) /
          100; // Effective area after applying percentage
        calculatedPlantSize = availableArea / areaPerKW; // Plant size in kW
        annualSaving =
          availableArea * totalUnitsPerAnnum * electricityCost * 0.1; // Adjusted annual saving
      }
    }

    setResult(annualSaving ? annualSaving.toFixed(2) : "Invalid Input");
    setPlantSize(calculatedPlantSize ? calculatedPlantSize.toFixed(2) : "N/A");
  };

  return (
    <div className="border border-green-600 p-8 bg-white rounded-3xl shadow-lg text-lg">
      <h2 className="text-gray-500 text-5xl py-3 mb-8 w-[65%]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipisicing odit
        exercitationem commodi{" "}
        <span className="text-black">elit. Aliquid.</span>
      </h2>

      {/* Selection Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {[
          { label: "Monthly Electricity Consumption Units" },
          { label: "Total Area of the Rooftop" },
        ].map(({ label }) => (
          <button
            key={label}
            type="button"
            onClick={() => handleOptionChange(label)}
            className={`flex-1 min-w-[250px] text-xl px-8 py-4 rounded-full text-center ${
              selectedOption === label
                ? "bg-green-500 text-white"
                : "border border-black text-black"
            } hover:bg-green-500 hover:border-green-500 hover:text-white transition`}
          >
            {label}
          </button>
        ))}
      </div>

      <form autoComplete="off" id="frm">
        {/* Inputs Based on Selection */}
        {selectedOption === "Total Area of the Rooftop" && (
          <div className="mb-8 flex flex-wrap gap-5 text-xl">
            <input
              type="text"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="rounded-full py-4 px-4 flex-1 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter area in sq. ft."
            />
            <input
              type="text"
              value={roofAreaPercentage}
              onChange={(e) => setRoofAreaPercentage(e.target.value)}
              className="rounded-full py-4 px-4 flex-1 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter percentage (default 100%)"
            />
          </div>
        )}

        {selectedOption === "Monthly Electricity Consumption Units" && (
          <div className="mb-8 flex flex-wrap gap-5 text-xl">
            <input
              type="text"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="rounded-full py-4 px-4 flex-1 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter monthly consumption (units)"
            />
          </div>
        )}

        <div className="flex flex-col gap-4 w-full mb-6">
          <label className="text-gray-700 font-semibold text-lg sm:text-xl">
            Average Electricity Unit Cost is
          </label>
          <div className="flex items-center flex-wrap gap-2 w-full">
            <input
              type="text"
              value={electricityCost}
              onChange={(e) => setElectricityCost(e.target.value)}
              className="flex-grow rounded-full py-2 px-4 bg-[#E6E6E6] text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              placeholder="Enter cost in Rs."
            />
            <span className="text-gray-700 font-semibold text-lg">
              Rs. / kWh
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <button
            type="button"
            onClick={calculate}
            className="bg-green-500 text-white border-black hover:text-slate-700 px-8 py-2 text-xl rounded-full hover:bg-green-400 transition duration-200"
          >
            Calculate
          </button>

          {/* Display Result */}
          {result && (
            <div className="bg-gray-100 p-4 rounded-3xl shadow-md text-green-700 font-bold text-lg">
              Annual Saving: Rs. {result}
            </div>
          )}

          {plantSize && (
            <div className="bg-gray-100 p-4 rounded-3xl shadow-md text-blue-700 font-bold text-lg">
              Plant Size: {plantSize} kW
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SolarCalculator;
