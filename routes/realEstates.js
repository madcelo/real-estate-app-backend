const express = require("express");
const router = express.Router();
const RealEstate = require("../models/RealEstate");

router.get("/", async (req, res) => {
  try {
    const realEstates = await RealEstate.find();
    res.json(realEstates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching real estates" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const realEstate = await RealEstate.findById(req.params.id);
    if (realEstate) {
      res.json(realEstate);
    } else {
      res.status(404).json({ message: "Real estate not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching real estate details" });
  }
});

module.exports = router;