import { useState } from "react";

const SolarCalculator = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Monthly Electricity Consumption Units"
  );
  const [roofArea, setRoofArea] = useState("");
  const [roofAreaPercentage, setRoofAreaPercentage] = useState("");
  const [consumption, setConsumption] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [electricityCost, setElectricityCost] = useState("");
  const [result, setResult] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setRoofArea("");
    setRoofAreaPercentage("");
    setConsumption("");
    setResult(null);
  };

  const calculate = () => {
    let annualSaving = 0;

    if (selectedOption === "Monthly Electricity Consumption Units") {
      const totalUnitsPerAnnum = 12 * 100; // Assuming 100 units per month for simplicity
      const monthlyAvg = 100; // Assuming monthly average is 100 units

      if (consumption && electricityCost) {
        annualSaving =
          totalUnitsPerAnnum * (consumption / monthlyAvg) * electricityCost;
      }
    } else if (selectedOption === "Total Area of the Rooftop") {
      const totalUnitsPerAnnum = 12 * 100; // Assuming 100 units per month for simplicity

      if (roofArea && electricityCost) {
        const availableArea = parseFloat(roofArea);
        annualSaving =
          (availableArea / 100) * totalUnitsPerAnnum * electricityCost;
      }
    }

    setResult(annualSaving ? annualSaving.toFixed(2) : "Invalid Input");
  };

  return (
    <div className="border border-green-600 p-8 bg-white rounded-3xl shadow-lg text-lg">
      <h2 className="text-gray-500 text-3xl py-3 mb-10">
        Lorem ipsum dolor sit amet, consectetur <br /> adipisicing odit
        exercitationem commodi{" "}
        <span className="text-black">elit. Aliquid.</span>
      </h2>

      {/* Selection Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {[
          { label: "Monthly Electricity Consumption Units" },
          { label: "Total Area of the Rooftop" },
        ].map(({ label }) => (
          <button
            key={label}
            type="button"
            onClick={() => handleOptionChange(label)}
            className={`flex-1 min-w-[250px] px-8 py-2 rounded-full text-center ${
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
        {/* Unique Inputs Based on Selection */}
        {selectedOption === "Total Area of the Rooftop" && (
          <div className="mb-8 flex justify-between gap-5">
            <input
              type="text"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter area in sq. m. or sq. ft."
            />
            <input
              type="text"
              value={roofAreaPercentage}
              onChange={(e) => setRoofAreaPercentage(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter percentage"
            />
          </div>
        )}

        {selectedOption === "Monthly Electricity Consumption Units" && (
          <div className="mb-8 flex gap-4">
            <input
              type="text"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter unit cost"
            />
          </div>
        )}

        {/* Common Inputs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <label className="w-full text-gray-700 font-semibold text-2xl mb-2">
            Customer Category
          </label>
          {["Residential", "Commercial", "Industrial"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCustomerType(type)}
              className={`flex-grow flex-basis-[30%] min-w-[200px] px-8 py-2 rounded-full text-center ${
                customerType === type
                  ? "bg-green-500 text-white"
                  : "border border-black text-black"
              } hover:bg-green-500 hover:text-white transition`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full mb-6">
          <label className="text-gray-700 font-semibold text-lg sm:text-xl">
            Average Electricity Unit Cost is
          </label>
          <div className="flex items-center gap-2 w-full">
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

        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            onClick={calculate}
            className="bg-green-500 text-white border-black hover:text-slate-700 px-8 py-2 text-xl rounded-full hover:bg-green-400 transition duration-200"
          >
            Calculate
          </button>

          {/* Display Result */}
          {result && (
            <div className="bg-gray-100 p-4 rounded-4xl shadow-md text-green-700 font-bold text-lg">
              Annual Saving: Rs. {result}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SolarCalculator;
