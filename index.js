const express = require('express');
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 9700;
const cors = require('cors');
app.use(cors());
app.get("/",(req, res) => {
    
})