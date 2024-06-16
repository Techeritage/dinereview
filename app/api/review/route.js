// app/api/reviews/create.js

import { connectToDb } from "@/app/utils/config/mongodb";
import Review from "@/app/utils/models/Review";
import Restaurant from "@/app/utils/models/Restaurant";
import User from "@/app/utils/models/User";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId, restaurantId, rating, comment } = req.body;

  if (!userId || !restaurantId || !rating || !comment) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  await connectToDb();

  try {
    const user = await User.findById(userId);
    const restaurant = await Restaurant.findById(restaurantId);

    if (!user || !restaurant) {
      return res.status(404).json({ message: 'User or Restaurant not found' });
    }

    const newReview = new Review({
      user: userId,
      restaurant: restaurantId,
      rating,
      comment,
    });

    await newReview.save();

    res.status(201).json({ message: 'Review created', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create review', error: error.message });
  }
}
