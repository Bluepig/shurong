const {range, mean, max, min} = require("lodash");
const {quantile} = require("d3");
const {rand} = require("./_mock-helpers");

/* @flow */

// 时间节点 * 项目ID * 指标
type ProjectMetrics = {
  projectID: number, // project id
  category: string, // 'commercial' || 'office' 项目类型
  revenue: number, // 营业额
  sales: number, // 销售额
  salesPerSqMetre: number, // 坪效
  footfall: number, // 客流数量
  rentPriceRatio: number, // 租售比
  mbrSalesRatio: number, // 会员消费占比
  mbrRepurchaseRate: number, // 会员复购率
  rentPerSqMeter: number, // 单位面积租金
  gfa: number, // Gross Floor Area 总建筑面积
  nla: number, // Net Leasable Area 总可租面积
  pkCapacity: number // Parking Capacity 总车位数
};

type MbrMetrics = {
  projectID: number, // mbr metrics of project id
  count: number, // 会员数量
  wechatFansCount: number, // 公众号粉丝数量
  newMbrCount: number, // 新增会员数量
  purchaseFreqStats: SumStats, // 购买频次归纳 Stats
  stayLengthStats: SumStats // 停留时间长 Stats
};

type TimeSeriesMetrics = {
  year: number,
  month: number, // compound pk (year, month)
  projects: Array<ProjectMetrics>,
  mbrStats: Array<MbrMetrics>
};

type SumStats = {
  min: number,
  max: number,
  mean: number,
  median: number,
  Q1: number,
  Q3: number
};

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
