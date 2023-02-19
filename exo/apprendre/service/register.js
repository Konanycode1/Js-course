const express = require('express');
const db = require('./db');
const  router = express.Router();


async function postMultiple(){

    const rows = await db.query(
      `SELECT * FROM user WHERE LOWER(name) = LOWER (${db.escape(req.body.name)});`
    );
    return rows
  }
  
  module.exports = {
    postMultiple
  }