const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.route("/").get(controller.getAlluser);
router.post("create",controller.createUser);
router.route("/:id").get(controller.getUser);
router.put('update',controller.updateUser);
router.delete('delete',controller.deleteUser);


module.exports = router;