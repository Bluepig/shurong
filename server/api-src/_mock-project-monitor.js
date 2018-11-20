/* @flow */
// $FlowFixMe
const {range, mean, max, min} = require("lodash");
// $FlowFixMe
const {quantile} = require("d3");
const {rand} = require("./_mock-helpers");

import type {
  TimeSeriesMetrics,
  ProjectMetrics,
  MbrMetrics,
  SumStats
} from "./type-def/project-monitor.js";

// Mocking Data Generator
function randomSumStats(n: number = 10): SumStats {
  let d: Array<number> = range(30).map(() => rand(n, 0));
  return {
    min: min(d),
    max: max(d),
    mean: mean(d),
    median: quantile(d, 0.5),
    Q1: quantile(d, 0.25),
    Q3: quantile(d, 0.75)
  };
}

function randomMbrMetrics(projids?: Array<number>): Array<MbrMetrics> {
  let d: Array<MbrMetrics> = range(4).map(i => ({
    projectID: i, // mbr metrics of project id
    count: rand(400, 0), // 会员数量
    wechatFansCount: rand(1000, 0), // 公众号粉丝数量
    newMbrCount: rand(200, 0), // 新增会员数量
    purchaseFreqStats: randomSumStats(4), // 购买频次归纳 Stats
    stayLengthStats: randomSumStats(10) // 停留时间长 Stats
  }));
  return d;
}

function randomProjectMetrics(projids?: Array<number>): Array<ProjectMetrics> {
  let d: Array<ProjectMetrics> = range(4).map(i => ({
    projectID: i,
    category: i > 4 ? "office" : "commercial",
    revenue: rand(1000, 0),
    sales: rand(800, 0),
    salesPerSqMetre: rand(10),
    footfall: rand(3000, 0),
    rentPriceRatio: rand(),
    mbrSalesRatio: rand(),
    mbrRepurchaseRate: rand(),
    rentPerSqMeter: rand(60, 0),
    gfa: 10000,
    nla: 7000,
    pkCapacity: 300
  }));

  if (projids !== null && projids !== undefined) {
    const _projids = projids; // work around for flowtype loose refinement within callback
    return d.filter(o => _projids.includes(o.projectID));
  } else {
    return d;
  }
}

function mockProjectMonitor(
  years?: Array<number>,
  months?: Array<number>,
  projids?: Array<number>
): Array<TimeSeriesMetrics> {
  return range(1, 25)
    .map(month => ({
      year: month < 12 ? 2016 : 2017,
      month: month % 12,
      projects: randomProjectMetrics(projids),
      mbrStats: randomMbrMetrics(projids)
    }))
    .filter(o => {
      let b = true;
      if (years) b = b && years.includes(o.year);
      if (months) b = b && months.includes(o.month);
      return b;
    });
}

module.exports = mockProjectMonitor;
