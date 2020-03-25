const express = require("express");
const routes = express.Router();


const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");


/* =========== ONGS =========== */

routes.post("/ongs", OngController.create);

routes.get("/ongs", OngController.index);


/* =========== INCIDENTS =========== */

routes.post("/incidents", IncidentController.create);

routes.get("/incidents", IncidentController.index);

routes.delete("/incidents/:id", IncidentController.delete);


/* =========== Profile =========== */

// routes.post("/profile", ProfileController.create);

routes.get("/profile", ProfileController.index);

/* =========== Login =========== */

routes.post("/sessions", SessionController.create)

/* =========== =========== ===========*/

module.exports = routes;
