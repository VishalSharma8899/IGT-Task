 // controllers/reviewController.js
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  try {
    const { stars, title, studentsWatched } = req.body;
    const image = req.file ? req.file.path : null;

    const review = await Review.create({
      user: req.user._id,
      image,
      stars,
      title,
      studentsWatched,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this review" });
    }

    const { stars, title, studentsWatched } = req.body;
    review.image = req.file ? req.file.path : review.image;
    review.stars = stars || review.stars;
    review.title = title || review.title;
    review.studentsWatched = studentsWatched || review.studentsWatched;

    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this review" });
    }

    await review.deleteOne();
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
