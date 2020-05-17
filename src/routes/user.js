const express = require("express");
const UserController = require("../controllers/UserController");
const cors = require("cors");

function taskApi(app) {
    const router = express.Router();

    // enable cors
    app.use("/api/users", cors(), router);

    router.get("/phoneTypes", UserController.getTypes);

    router.get("/", UserController.getAll);

    router.get("/:id", UserController.getId);

    router.get("/types", UserController.getTypes);

    router.post("/", UserController.create);

    router.put("/:id", UserController.update);

    router.delete("/:id", UserController.deleted);

}

module.exports = taskApi;