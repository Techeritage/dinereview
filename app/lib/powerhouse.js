import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("/api/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRestaurants = async () => {
  try {
    const res = await axios.get("api/restaurants");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (name, email, password) => {
  try {
    const res = await axios.post("/api/users", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addreview = async (user, restaurant, rating, comment) => {
  try {
    const res = await axios.post("/api/review", {
      user,
      restaurant,
      rating,
      comment,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async () => {
  try {
    const res = await fetch("/api/review");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewRestaurant = async (
  name,
  email,
  password,
  address,
  phone
) => {
  try {
    const res = await axios.post("/api/restaurants", {
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
