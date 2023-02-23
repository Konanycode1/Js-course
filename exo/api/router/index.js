const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.get("/",controller.getAlluser);
// router.post("/ert",controller.createUser);
router.route("/create").post(controller.createUser);
router.route("/:id").get(controller.getUser);
router.put('/update',controller.updateUser);
router.delete('/delete',controller.deleteUser);


module.exports = router;