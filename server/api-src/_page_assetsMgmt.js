const {pick, mapValues} = require("lodash");
const {mockAssetsMgmt} = require("./mock-index.js");

/*  项目资产管理 */

function getAssetsMgmtData(req, res, next) {
  let {years, months, projids} = mapValues(
    pick(req.query, ["months", "years", "projids"]),
    d => d.split("-").map(Number.parseFloat)
  );
  res.json(mockAssetsMgmt(years, months, projids));
}

module.exports = getAssetsMgmtData;
