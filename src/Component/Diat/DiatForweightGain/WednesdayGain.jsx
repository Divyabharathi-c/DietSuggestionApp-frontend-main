import { useEffect, useState } from "react";
import { backendUrl } from "../../../config.js";

const WednesdayGain = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch('https://dietbackend.onrender.com/api/weightgain');
      const data = await response.json();
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2
        className="text-2xl font-semibold mb-2"
        style={{ textAlign: "center" }}
      >
        Wednesday
      </h2>

     
      {users.map((user, index) => (
        <div key={index} className="p-4 bg-gray-100">
          <div className="bg-white p-4 shadow-md rounded-md" style={{ textAlign: "center" }}>
            <h3 className="text-xl font-semibold">{user.mealTime}</h3>
            <p>Food: {user.food}</p>
            <p>Calories: {user.calories}</p>
            <p>Protein: {user.protein}</p>
            <p>Carbs: {user.carbs}</p>
            <p>Fat: {user.fat}</p>
          </div>
        </div>
      ))}


    
    </>
  );
};

export default WednesdayGain;
