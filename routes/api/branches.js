const express = require("express");
const router = express.Router();
const apicache = require("apicache");
let cache = apicache.middleware;

const db = require("../../config/db");

// Get branches based on possible matches across all columns and all rows
router.get("/", cache("1 day"), async (req, res) => {
  try {
    let { q, limit, offset } = req.query;
    let search = null;
    if (q) {
      search = q.toUpperCase();
    }

    const branches = await db.query(
      `
      SELECT branches.*, banks.name FROM branches
      INNER JOIN banks
      ON branches.bank_id = banks.id
      WHERE branch LIKE '%${search}%' OR address LIKE '%${search}%' OR city LIKE '%${search}%' OR district LIKE '%${search}%' OR state LIKE '%${search}%' OR ifsc LIKE '%${search}%' OR bank_id::text LIKE '%${search}%' OR name LIKE '%${search}%'
      ORDER BY ifsc
      LIMIT ${limit ? limit : null} OFFSET ${offset ? offset : null}
      `
    );

    res.json(branches.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get branches based on branch name AUTOCOMPLETE API
router.get("/autocomplete", cache("1 day"), async (req, res) => {
  try {
    let { q, limit, offset } = req.query;
    let search = null;
    if (q) {
      search = q.toUpperCase();
    }

    const branches = await db.query(
      `
      SELECT branches.*, banks.name FROM branches
      INNER JOIN banks
      ON branches.bank_id = banks.id
      WHERE branch LIKE '%${search}%' 
      ORDER BY ifsc
      LIMIT ${limit ? limit : null} OFFSET ${offset ? offset : null}
      `
    );
    res.json(branches.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
