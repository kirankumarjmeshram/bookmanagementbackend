const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const searchRoutes = require("./routes/searchRoutes");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/books", bookRoutes);
app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

