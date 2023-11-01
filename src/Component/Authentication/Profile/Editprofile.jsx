import { useEffect, useState } from "react";
import { backendUrl } from "../../../config";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const Profilefetch = async () => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    console.log(userdata.email);

    const loginResponse = await fetch(`${backendUrl}/auth/profile`, {
      method: "POST",
      body: JSON.stringify({ email: userdata.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await loginResponse.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    Profilefetch();
  }, []);

  const userdata = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: userdata.email,
    password: "",
    confirmPassword: "",
    height: "",
    weight: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginResponse = await fetch(`${backendUrl}/auth/editprofile`, {
        method: "PUT",
        body: JSON.stringify({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          height: user.height,
          weight: user.weight,
          age: user.age,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!loginResponse.ok) {
        throw new Error("Network response was not ok");
      }

      // eslint-disable-next-line no-unused-vars
      const data = await loginResponse.json();
      navigate("/profile");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-semibold leading-tight">
                  Edit Profile
                </h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInputChange}
                      placeholder={users.Firstname}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleInputChange}
                      placeholder={users.Lastname}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="height">Height(cm):</label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={user.height}
                      onChange={handleInputChange}
                      placeholder={users.Height}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="weight">Weight(kg):</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={user.weight}
                      onChange={handleInputChange}
                      placeholder={users.Weight}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={user.age}
                      onChange={handleInputChange}
                      placeholder={users.Age}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
