const express = require("express");
const mongoose = require("mongoose");
const passport = require("./middleware/auth");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Import routes
const realEstatesRoutes = require("./routes/realEstates");
const authRoutes = require("./routes/auth");

// Routes
app.use("/api/real-estates", realEstatesRoutes);
app.use("/api/auth", authRoutes); // Replace routes.auth with authRoutes

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
