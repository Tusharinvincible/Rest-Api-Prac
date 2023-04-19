const express = require("express");
require("./db/mongoose.js");
//const User = require("./models/user.js");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// const Task = require("./models/task.js");
const app = express();
app.use(userRouter);
app.use(taskRouter);

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("", (req, res) => {
  res.send("index Page");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
