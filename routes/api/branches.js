const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { v4: uuid } = require("uuid");

const db = require("../../config/db");

// Get all banks
router.get("/banks", async (req, res) => {
  try {
    const allBanks = await db.query("SELECT * FROM banks");
    res.json(allBanks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get branches based on possible matches across all columns and all rows
router.get("/", async (req, res) => {
  try {
    let { q, limit, offset } = req.query;
    q = q.toUpperCase();
    console.log(q);

    const branches = await db.query(
      `
      SELECT * FROM branches 
      WHERE branch LIKE '%${q}%' OR address LIKE '%${q}%' OR city LIKE '%${q}%' OR district LIKE '%${q}%' OR state LIKE '%${q}%' 
      ORDER BY ifsc
      LIMIT ${limit} OFFSET ${offset}
      `
    );
    res.json(branches.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get branches based on branch name AUTOCOMPLETE API
router.get("/autocomplete", async (req, res) => {
  try {
    let { q, limit, offset } = req.query;
    q = q.toUpperCase();

    const branches = await db.query(
      `
      SELECT * FROM branches 
      WHERE branch LIKE '%${q}%' 
      ORDER BY ifsc
      LIMIT ${limit} OFFSET ${offset}
      `
    );
    res.json(branches.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
