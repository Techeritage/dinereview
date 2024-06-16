import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRestaurants = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/restaurants");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:3000/api/users", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewRestaurant = async (name, email, password, address, phone) => {
  try {
    const res = await axios.post("http://localhost:3000/api/restaurants", {
      name,
      email,
      password,
      address,
      phone,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
