const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config

const PORT = process.env.DB_PORT || 3000;





// demarrage du serveur
app.listen(PORT, () => {
    console.log(`le server demarre sur le port: ${PORT}`);
});