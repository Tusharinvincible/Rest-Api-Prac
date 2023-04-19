require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.updateMany(
//   { description: "Learning Api's" },
//   {
//     $set: {
//       completed: false,
//     },
//   }
// ).then((tasks) => {
//   console.log(tasks);
// });

// Task.deleteOne({ _id: "643ee81d96db2a9a913e0e84" })
//   .then((task) => {
//     console.log(task);

//     return Task.find({ completed: true });
//   })
//   .then((res) => {
//     console.log(res);
//     console.log(res.length);
//   });

const deleteAndCount = async (id) => {
  const task = await Task.deleteMany({ description: id });
  const tasks = await Task.countDocuments({ completed: false });
  return tasks;
};

deleteAndCount("Pending Rest Api")
  .then((tasks) => {
    console.log(tasks);
  })
  .catch((err) => {
    console.log("error");
  });
