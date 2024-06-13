require("dotenv").config();
const express = require("express");
const app = express();
const home = require("./router/routes");
const connectDB = require("./db");
const errorMiddleware = require("./middlewares/error_middleware");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "POST, PUT, GET, DELETE, HEAD, PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api", home);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
