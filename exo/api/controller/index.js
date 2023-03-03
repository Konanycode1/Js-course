const AppError = require("../utils/appError");
const conn = require("../service/db");

exports.getAlluser = (req, res, next) => {
    conn.query("SELECT * FROM user", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

   exports.createUser = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name,req.body.last_name, req.body.numbersed];
    conn.query(
        `INSERT INTO user(name, last_name, numbersed) VALUES('${req.body.name}','${req.body.last_name}','${req.body.numbersed}')`,
        [values],function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Person  created!",
        });
      }
    );
   };

   exports.getUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user id found", 404));
    }
    conn.query(
      "SELECT * FROM user WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data.length,
          data: data,
        }); 
      }
    );
   };
   exports.updateUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user id found", 404));
    }
    conn.query(
      "UPDATE user SET status='completed' WHERE id=?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "user updated!",
        });
      }
    );
   };

   exports.deleteUser = (req, res, next) => {
    console.log(req.params)
    if (!req.params.id) {
      return next(new AppError("No user id found", 404));
    }
    conn.query(
      "DELETE FROM user WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo deleted!",
        });
      }
    );
   }