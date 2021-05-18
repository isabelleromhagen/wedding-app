const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");
const Guest = require("../models/Guest");
const Performance = require("../models/Performance");
const Padel = require("../models/Padel");

// @route    GET /guests/list
// @desc     Get all guests
// @access   Private
router.get("/list", auth, async (req, res) => {
  try {
        const guests = await Guest.find().populate("guest", ["name"]);
        res.json(guests);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route    POST /guests
// @desc     Register guest
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, bus, song } = req.body;

    try {
      let guest = await Guest.findOne({ email });
      if (guest) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Guest has already been registered" }] });
      }

      guest = new Guest({
        name,
        email,
        message,
        bus,
        song
      });

      await guest.save();

      const payload = {
        guest: {
          id: guest.id,
        },
      };

      res.json(guest);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route    GET /guests/performance
// @desc     Get all performances
// @access   Private
router.get("/performance", auth, async (req, res) => {
  try {
    const performances = await Performance.find().populate("performance", ["name"]);
    res.json(performances);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST /guests/performance
// @desc     Register program point
// @access   Public
router.post(
  "/performance",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, relation, phone, email, type, time, equipment, song } = req.body;

    try {

      let performance = new Performance({
        name,
        relation,
        email,
        phone,
        type,
        time,
        equipment,
        song
      });

      await performance.save();

      const payload = {
        performance: {
          id: performance.id,
        },
      };

      res.json(performance);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route    GET /guests/padel
// @desc     Get all padel participants
// @access   Private
router.get("/padel", auth, async (req, res) => {
  try {
    const padel = await Padel.find().populate("padel", ["email"]);
    res.json(padel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route    POST /guests/padel
// @desc     Register padel
// @access   Public
router.post(
  "/padel",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email } = req.body;

    try {

      let padel= await Padel.findOne({ email });

      if (padel) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Guest has already registered to play padel" }] });
      }

      padel = new Padel({
        name,
        email,
      });

      await padel.save();

      const payload = {
        padel: {
          id: padel.id,
        },
      };

      res.json(padel);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);


module.exports = router;
