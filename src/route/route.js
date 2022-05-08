const express = require("express");
const router = express.Router();

const collegeController = require("../controllers/collegeControllers");
const internController = require("../controllers/internControllers");

//1. api
router.post("/colleges", collegeController.createCollege);
//2. api
router.post("/interns", internController.createIntern);
//3. api
router.get("/collegeDetails", collegeController.collegeDetails);

module.exports = router;
