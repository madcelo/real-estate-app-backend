const mongoose = require("mongoose");

const realEstateSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  description: String,
  type: String,
  purpose: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  address: String,
  images: [String],
  additionalInfo: String,
});

const RealEstate = mongoose.model("RealEstate", realEstateSchema);

module.exports = RealEstate;