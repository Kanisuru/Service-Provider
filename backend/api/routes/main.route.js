var express = require("express");
var router = express.Router();
var mainController = require("../controllers/main.controller");

// HTTP VERBS: POST, GET, PUT, DELETE

// POST /api/providers
router.post("/providers", mainController.create);

// GET /api/providers
router.get("/providers", mainController.readAll);

// GET One /api/providers/123
router.get("/providers/:id", mainController.readOne);

// PUT /api/providers/123
router.put("/providers/:id", mainController.update);

// DELETE One /api/providers/123
router.delete("/providers/:id", mainController.deleteOne);

// DELETE All /api/providers
router.delete("/providers", mainController.deleteAll);

// // No matching api endpoints
router.post("/*", notFound);
router.get("/*", notFound);
router.put("/*", notFound);
router.delete("/*", notFound);

function notFound(req, res) {
  res.status(400);
  res.send("Invalid Endpoint.");
}

module.exports = router;
