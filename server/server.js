const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
// const fs = require("fs");

// const {MongoClient} = require("mongodb");

const api = require(path.resolve(__dirname, ".", "api/index"));

// Pooling Connection
// --------------------
// DB Connection Setting
// const dbURI = 'mongodb://localhost:27017', dbName = 'BI';
// MongoClient.connect(dbURI, {useNewUrlParser: true}, (err, conn) => {});

// Express App Object and Settings
// -------------------------------
let app = express();
// request parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static
app.use(express.static(path.join(__dirname, "assets")));

// Router
// ------------------------------
// API Root
let apiRoot = express.Router();
app.use("/api", apiRoot);

// data api root
let dataApiRoot = express.Router();
apiRoot.use("/data", dataApiRoot);

// Assets Management Api Root
let assetsMgmtRoot = express.Router(); // /api/data/assets-mgmt?years&months&projids
dataApiRoot.use("/assets-mgmt", assetsMgmtRoot);

assetsMgmtRoot.route("/").get(api.getAssetsMgmtData);

// Project Monitor Api Root
let projectMonitorRoot = express.Router(); // /api/data/project-monitor?years&months&projids
dataApiRoot.use("/project-monitor", projectMonitorRoot);

projectMonitorRoot.route("/").get(api.getProjectMonitorData);

// Business Monitor By Type Api Root
let tenantOperationMonitorRoot = express.Router(); // /api/data/tenant-operation-monitor?[shopName,bizType]&year&month&week
dataApiRoot.use("/tenant-operation-monitor", tenantOperationMonitorRoot);

tenantOperationMonitorRoot.route("/").get(api.getTenantOperationData);

// Launch
// ------------------------------
app.listen(5000);
