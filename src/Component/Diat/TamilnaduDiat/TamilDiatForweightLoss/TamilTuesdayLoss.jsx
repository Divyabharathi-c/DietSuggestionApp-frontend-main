// import MondayData from './data/Monday.json';
import { useEffect, useState } from 'react';
import {backendUrl} from '../../../../config.js'

const TamilTuesdayLoss = () => {

  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
    const responce = await fetch(`${backendUrl}/tamilweightloss`);
    const data = await responce.json();
    const data1=data[1];
    const data2=data1.Tuesday
    const data3=data2.Breakfast
    console.log(data3 );
    setUsers(data2);
  } catch (error) {
  console.error('Error fetching data:', error);
}
};


// const Breakfast =users.Breakfast;
// const Food=Breakfast.Food
useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
// console.log(Food)



  return (
    <>
          <h2 className="text-2xl font-semibold mb-2" style={{textAlign:'center'}}>Tuesday</h2>

          <div className="p-4 bg-gray-100">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Breakfast</h3>
          {users && users.Breakfast ? (
            <>
              <p>Food: {users.Breakfast.Meal}</p>
              <p>Calories: {users.Breakfast.Calories}</p>
              <p>Protein: {users.Breakfast.Protein}</p>
              <p>Carbs: {users.Breakfast.Carbs}</p>
              <p>Fat: {users.Breakfast.Fat}</p>
            </>
          ) : (
            <p>No Breakfast data available.</p>
          )}
        </div>
      </div>


      <div className="p-4 bg-gray-100">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Snack</h3>
          {users && users.Snack ? (
            <>
              <p>Food: {users.Snack.Meal}</p>
              <p>Calories: {users.Snack.Calories}</p>
              <p>Protein: {users.Snack.Protein}</p>
              <p>Carbs: {users.Snack.Carbs}</p>
              <p>Fat: {users.Snack.Fat}</p>
            </>
          ) : (
            <p>No Snack data available.</p>
          )}
        </div>
      </div>

     

      <div className="p-4 bg-gray-100">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Lunch</h3>
          {users && users.Lunch ? (
            <>
              <p>Food: {users.Lunch.Meal}</p>
              <p>Calories: {users.Lunch.Calories}</p>
              <p>Protein: {users.Lunch.Protein}</p>
              <p>Carbs: {users.Lunch.Carbs}</p>
              <p>Fat: {users.Lunch.Fat}</p>
            </>
          ) : (
            <p>No Lunch data available.</p>
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-100">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Snack2</h3>
          {users && users.Snack2 ? (
            <>
              <p>Food: {users.Snack2.Meal}</p>
              <p>Calories: {users.Snack2.Calories}</p>
              <p>Protein: {users.Snack2.Protein}</p>
              <p>Carbs: {users.Snack2.Carbs}</p>
              <p>Fat: {users.Snack2.Fat}</p>
            </>
          ) : (
            <p>No Snack data available.</p>
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-100">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Dinner</h3>
          {users && users.Dinner ? (
            <>
              <p>Food: {users.Dinner.Meal}</p>
              <p>Calories: {users.Dinner.Calories}</p>
              <p>Protein: {users.Dinner.Protein}</p>
              <p>Carbs: {users.Dinner.Carbs}</p>
              <p>Fat: {users.Dinner.Fat}</p>
            </>
          ) : (
            <p>No Dinner data available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TamilTuesdayLoss;
