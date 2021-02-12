const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

// GET /user/all
router.get("/all", userController.getUsers);
router.get("/pupils", userController.getPupils);

// // POST /user
// router.post(
//   "/",
//   userController.createUser,
// );

// GET /user/:userId
router.get("/:userId", userController.getUser);

// // PUT /user/:userId
// router.put("/:userId", userController.updateUser);

// // DELETE /user/userId
// router.delete("/:userId", userController.deleteUser);





module.exports = router;
