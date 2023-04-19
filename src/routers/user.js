const User = require("../models/user.js");
const express = require("express");

const router = new express.Router();

router.post("/users", async (req, res) => {
  //console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }

  // user
  //   .save()
  //   .then(() => {
  //     console.log("Data Inserted Successfully")/Users/tusharvarkhede/mongodb/bin/mongod --dir;
  //     res.send(user);
  //   })
  //   .catch(() => {
  //     console.log("Some Error in Data Inserting");
  //   });
});
// Get The use Data by Name
router.get("/users/:name", async (req, res) => {
  console.log(req.params.name);
  const users = await User.find(req.params);
  try {
    res.send(users);
  } catch (e) {
    res.send("error");
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.send("Error in Finding");
  }
});

// For Updating the User using its Id

router.patch("/users/:id", async (req, res) => {
  // Checking User is Trying to update only allowed Keys
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age"];
  let can = true;

  updates.forEach((update) => {
    if (!allowedUpdates.includes(update)) {
      can = false;
    }
  });

  if (!can) {
    return res.status(404).send("Cannot Perform Update Operation");
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.send(`User with id ${req.params.id} not Found `);
    }
    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

// Delete User By id

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = router;
