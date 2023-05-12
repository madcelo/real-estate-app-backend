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

router.post("/", async (req, res) => {
  const newRealEstate = new RealEstate(req.body);

  try {
    const savedRealEstate = await newRealEstate.save();
    res.status(201).json(savedRealEstate);
  } catch (error) {
    res.status(500).json({ message: "Error saving new real estate" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRealEstate = await RealEstate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedRealEstate) {
      res.json(updatedRealEstate);
    } else {
      res.status(404).json({ message: "Real estate not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating real estate" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRealEstate = await RealEstate.findByIdAndDelete(req.params.id);
    if (deletedRealEstate) {
      res.json({ message: "Real estate deleted successfully" });
    } else {
      res.status(404).json({ message: "Real estate not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting real estate" });
  }
});

module.exports = router;