/* @flow */
// $FlowFixMe
const {range} = require("lodash");
const {rand} = require("./_mock-helpers");

import type {ProjectMetrics, TimeSeriesMetrics} from "./type-def/assets-mgmt";

// Mocking Data Generator
function randomProjectMetrics(projids: Array<number>): Array<ProjectMetrics> {
  let d: Array<ProjectMetrics> = range(4).map(i => ({
    projectID: i,
    avgLeasingRate: rand(),
    avgRent: rand(30),
    faceRent: rand(30),
    rentEarnRate: rand(),
    capRate: rand(),
    noi: rand(),
    irr: rand(2),
    npv: rand(30)
  }));
  return projids ? d.filter(o => projids.includes(o.projectID)) : d;
}

function mockAssetsMgmt(
  years: Array<number>,
  months: Array<number>,
  projids: Array<number>
): Array<TimeSeriesMetrics> {
  return range(1, 37)
    .map(month => ({
      year: month < 12 ? 2016 : month < 24 ? 2017 : 2018,
      month: month % 12,
      projects: randomProjectMetrics(projids)
    }))
    .filter(o => {
      let b = true;
      if (years) b = b && years.includes(o.year);
      if (months) b = b && months.includes(o.month);
      return b;
    });
}

module.exports = mockAssetsMgmt;
