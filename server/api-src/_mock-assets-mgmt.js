/* @flow */

const {range} = require("lodash");
const {rand} = require("./_mock-helpers");

// 时间节点 * 项目ID * 指标项目

type ProjectMetrics = {
  projectID: number, // pk
  avgLeasingRate: number, // 平均出租率
  avgRent: number, // 平均租金
  faceRent: number, // 面价租金 误.....
  rentEarnRate: number, // 租金收益率
  capRate: number, // 资本化率
  noi: number, // NOI 营运净收入
  irr: number, // IRR 内部收益率
  npv: number // NPV 净现值
};

type TimeSeriesMetrics = {
  year: number,
  month: number, // compound pk (year, month)
  projects: Array<ProjectMetrics>
};

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
