const express = require("express");
const cors = require("cors");
const infoRoutes = require("./routes/infoRoutes");

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

app.use("/api", infoRoutes);

app.listen(PORT, () => {
  console.log(`Server runing at ${PORT}`);
});
