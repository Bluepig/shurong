const {mockAssetsMgmt} = require('./mock-index.js');
const {pick, mapValues} = require('lodash');

/* @flow */

/*  项目资产管理 */

function getAssetsMgmtData(req: any, res: any, next: any) {
  let {years, months, projids} = mapValues(pick(req.query, ['months', 'years', 'projids']), (d) => d.split('-').map(Number.parseFloat));
  res.json(mockAssetsMgmt(years, months, projids));
}

module.exports = getAssetsMgmtData;
