const express = require("express");

const router = express.Router();

const { index,send } = require('../controllers/sendEmail');

router.get("/", index);
router.get("/send", send);

module.exports = router;