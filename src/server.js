const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const { sendEmail } = require("./controllers/controller");

app.post("/send-email", sendEmail);

module.exports = app;
