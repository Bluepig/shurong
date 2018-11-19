const {mockProjectMonitor} = require('./mock-index.js');
const {pick, mapValues} = require('lodash');

/* @flow */

/*  项目监测 */

function getProjectMonitorData(req: any, res: any, next: any) {
  let {years, months, projids} = mapValues(pick(req.query, ['months', 'years', 'projids']), (d) => d.split('-').map(Number.parseFloat));
  res.json(mockProjectMonitor(years, months, projids));
}

module.exports = getProjectMonitorData;
