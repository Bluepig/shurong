const {pick, mapValues} = require("lodash");
const {mockProjectMonitor} = require("./mock-index.js");

/*  项目监测 */

function getProjectMonitorData(req, res, next) {
  let {years, months, projids} = mapValues(
    pick(req.query, ["months", "years", "projids"]),
    d => d.split("-").map(Number.parseFloat)
  );
  res.json(mockProjectMonitor(years, months, projids));
}

module.exports = getProjectMonitorData;
