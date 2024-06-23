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

    // Assuming your backend sends a structured response like { data, error }
    return res; // Return the actual data from the response
  } catch (error) {
    console.log("Registration error:", error);
    throw error; // Rethrow the error to be caught by the caller (e.g., UserRegistrationForm)
  }
};

export const addreview = async (user, restaurant, rating, comment) => {
  try {
    const res = await axios.post("http://localhost:3000/api/review", {
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

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/admin/users/${id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/review");
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
