import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name == "weight") {
      setWeight(Number(value));
    } else if (name == "height") {
      setHeight(Number(value));
    }
  };

  const calculateBMI = () => {
    let result: number = (weight / (height / 100) ** 2);
    result = Number(result.toFixed(2));
    setBmi(result);
  };

  const handleResult = (): string | undefined => {
    if (bmi === 0) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Healthy Weight";
    if (bmi < 29.9) return "Overweight";
    if (bmi < 34.9) return "class1 Obesity";
    if (bmi < 39.9) return "class2 Obesity";
    if (bmi >= 40) return "class3 Obesity";
    if (bmi < 0) return "Error";
  };

  return (
    <div className="container">
      <h1>BMI calculator</h1>
      <div>
        <label htmlFor="weight">weight in kg.</label>
        <input type="number" name="weight" onChange={handleOnChange} />
      </div>

      <div>
        <label htmlFor="height">height in cm.</label>
        <input type="number" name="height" onChange={handleOnChange} />
      </div>

      <button onClick={calculateBMI}>Calculate</button>
      <h3>Your BMI : {bmi}</h3>
      <h3>Result : {handleResult()}</h3>
    </div>
  );
}

export default App;
