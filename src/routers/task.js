const express = require("express");
const Task = require("../models/task");
const router = new express.Router();
router.post("/task", async (req, res) => {
  // console.log(req.body);
  const task = new Task(req.body);

  try {
    await task.save();
    res.send(task);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.send(task);
  //   })
  //   .catch((err) => {
  //     console.log("Error on Task registration", err);
  //     res.send("Error");
  //   });

  //res.send("Testing on task");
});

router.get("/task", async (req, res) => {
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((err) => {
  //     res.status(404).send("error");
  //   });

  try {
    const tasks = await Task.find({});

    res.send(tasks);
  } catch (e) {
    res.send("Error in Finding All Tasks");
  }
});

router.get("/task/:id", async (req, res) => {
  // Task.find({ _id: req.params.id })
  //   .then((task) => {
  //     if (!task) {
  //       return res.send("Not found");
  //     }
  //     res.send(task);
  //   })
  //   .catch((err) => {
  //     res.status(404).send("error");
  //   });

  try {
    const task = await Task.find({ _id: req.params.id });
    if (task.length === 0) {
      return res.send("Task Not Found");
    }
    res.send(task);
  } catch (e) {
    res.send("Error in Task Finding");
  }
});

router.patch("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.send(`User with id ${req.params.id} not Found `);
    }
    res.send(task);
  } catch (e) {
    res.send(e.message);
  }
});

// Delete Task By Id

router.delete("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send("Task Not Found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = router;
