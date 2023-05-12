const mongoose = require("mongoose");

const realEstateSchema = new mongoose.Schema({
  imageUrl: [String],
  title: String,
  description: String,
  type: String,
  purpose: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  address: String,
  additionalInfo: String,
  featured: Boolean,
});

const RealEstate = mongoose.model("RealEstate", realEstateSchema, 'real-estates');

module.exports = RealEstate;