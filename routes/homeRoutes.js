const express = require("express");
const path = require("path");
const router = require("express").Router();

// homepage
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise page



// stats page

module.exports = router;