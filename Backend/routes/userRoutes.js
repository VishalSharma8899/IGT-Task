import express from "express";
const router = express.Router();
import {
  createReview,
  updateReview,
  deleteReview,
  getAllReviews,
} from '../controllers/reviewController.js';

import {auth} from "../middleware/auth.js";        
import upload from "../middleware/upload.js";
import { userRegister, login } from "../controllers/userController.js";

router.post("/register", userRegister);
router.post("/login", login);

router.post("/reviewadd", auth, upload.single("image"), createReview);
router.put("/reviewUpdate/:id", auth, upload.single("image"), updateReview);
router.delete("/:id", auth, deleteReview);
router.get("/get", getAllReviews);

export default router;
