require("dotenv").config();
const path = require("path");
const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const port = process.env.PORT || 3002;
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const cors = require("cors");
// const { checkUser } = require("./middlewares/auth");
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.get("/", checkUser);
app.use("/api/v1/user", require("./routes/userRouter"));
app.use("/api/v1/shakes", require("./routes/shakesRouter"));

// SERVE FRONTEND
if (process.env.NODE_DEV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("please set to production"));
}

app.use(errorHandler);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "404 not found",
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
