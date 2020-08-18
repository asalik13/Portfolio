const express = require("express");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 8000;
const host = process.env.HOST;
const app = express();
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, () => console.log("Server running on port " + PORT));
