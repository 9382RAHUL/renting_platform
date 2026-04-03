// routes/listingRoutes.js
import express from "express";
import {
  createListing,
  getListings,
  getListingById,
  updateListing,
  deleteListing
} from "../controllers/listingController.js";

const router = express.Router();

// Routes
router.post("/", createListing);           // POST /api/listings
router.get("/", getListings);              // GET /api/listings?location=jadavpur&maxPrice=7000
router.get("/:id", getListingById);        // GET /api/listings/:id
router.put("/:id", updateListing);         // PUT /api/listings/:id
router.delete("/:id", deleteListing);      // DELETE /api/listings/:id

export default router;
