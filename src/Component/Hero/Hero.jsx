import { useState } from "react";
import styles from "./Hero.module.css"; // Import your CSS file for styling

const Hero = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [caloriesForWeightGain, setCaloriesForWeightGain] = useState(0);
  const [caloriesForWeightLoss, setCaloriesForWeightLoss] = useState(0);

  const calculateBMI = () => {
    // BMI calculation
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBmi(bmiValue);

    // Calculate calories for weight gain and loss (you can use any formula here)

    const bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    setCaloriesForWeightGain(Math.round(bmr + 500));
    setCaloriesForWeightLoss(Math.round(bmr - 500));
  };

  const getBmiRangeColor = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const bmiRangeColor = getBmiRangeColor(bmi);

  const handleCalculateClick = () => {
    calculateBMI();
  };

  return (
    <div className={styles.outbox}>
      <div className={styles.container}>
        <h1 className={styles.heading}>BMI Calculator</h1>
        <div className={styles.button}>
          <div>
                        <img src="../src/assets/image.jpg" alt="" />

            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button onClick={handleCalculateClick}>Calculate BMI</button>
        </div>
        <div className={styles.button}>
          <p>BMI: {bmi}</p>
          <p>Calories for Weight Gain: {caloriesForWeightGain} Kcal/day</p>
          <p>Calories for Weight Loss: {caloriesForWeightLoss}  Kcal/day</p>
        </div>
        <div className={styles.button}>
          <p>BMI Range: {bmiRangeColor}</p>
          <div className={`bmi-range-color ${bmiRangeColor.toLowerCase()}`} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
