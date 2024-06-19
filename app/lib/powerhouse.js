import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("https://dinereview.vercel.app/api/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRestaurants = async () => {
  try {
    const res = await axios.get(
      "https://dinereview.vercel.app/api/restaurants"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (name, email, password) => {
  try {
    const res = await axios.post("https://dinereview.vercel.app/api/users", {
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
    const res = await axios.get("/api/review");
    return res?.data;
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
    const res = await axios.post(
      "https://dinereview.vercel.app/api/restaurants",
      {
        name,
        email,
        password,
        address,
        phone,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
