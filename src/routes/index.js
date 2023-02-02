const express = require("express");

const router = express.Router();

router.use("/ongs", require("./ongs"));

router.use("/empresas/", require("./empresas"));
router.use("/admin/", require("./admin"));
router.use("/posts/", require("./posts"));
router.use("/produto/", require("./produto"));

router.get("/", (req, res) => {
  res.status(200).json("Olá! Bem vindo SPS");
});

module.exports = router;
