const express = require("express");
const router = new express.Router();
const Contacts = require("../models/contacts");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const all = await Contacts.find();
    res.send(all);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, password, messages } = req.body;

    await Contacts.create({ username, password, messages });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
