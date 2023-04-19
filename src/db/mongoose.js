const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const me = new User({
//   name: "    Pranav    Varkhede    ",
//   email: " PRANAV@GMAIL.COM",
//   age: 16,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//     console.log("Saved successfully");
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

// const homework = new Task({
//   description: "Pending Rest Api",
//   completed: false,
//   password: "tushar@1234    ",
// });

// homework
//   .save()
//   .then((res) => {
//     console.log(res);
//     console.log(homework);
//     console.log("Data Saved Successfully");
//   })
//   .catch((err) => {
//     console.log("Found An Error");
//     console.log(err);
//   });
