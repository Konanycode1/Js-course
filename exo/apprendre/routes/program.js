const express = require('express');
const router = express.Router();
const db = require('../service/db')
const program = require('../service/program');
const {registerValidation} = require('../service/validate_registre');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { postMultiple } = require('../service/register');

/* GET programming languages. */
router.get('/user', async function(req, res, next) {
  try {
    res.json(await program.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/register',registerValidation, async function (req, res, next){
  db.query(
      `SELECT * FROM user WHERE name = ${req.body.name};`,(err, result)=>{
          if(result.lenght){
              return res.status(409).send({msg: 'ce nom exist déjà'});
          }
          else{
              req.body.numbersed.isLenght({min:10}),(err,result)=>{
                  if(err){
                      return res.status(500).send({msg:err});
                  }
                  else{
                      db.query(`INSERT INTO user (name, last_name, password) VALUES('${req.body.name}','${req.body.last_name}','${req.body.numbersed}' )`,
                      (err, result)=>{
                          if(err){return res.status(400).send({msg: err});
                          }
                          return res.status(201).send({msg: 'votre enregistrement à été effectuer'});
                      });   
                  }
              } 
          }
      }
    )   
} );
module.exports = router;