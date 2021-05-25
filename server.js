const express = require("express");
const app = express();

const path = require("path");

// Database
const db = require("./config/db");

/* // Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));
 */
//Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/branches", require("./routes/api/branches"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
