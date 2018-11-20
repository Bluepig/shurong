// @flow
/* 项目管理 */
// 时间节点 * 项目ID * 指标

export type ProjectMetrics = {
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

export type MbrMetrics = {
  projectID: number, // mbr metrics of project id
  count: number, // 会员数量
  wechatFansCount: number, // 公众号粉丝数量
  newMbrCount: number, // 新增会员数量
  purchaseFreqStats: SumStats, // 购买频次归纳 Stats
  stayLengthStats: SumStats // 停留时间长 Stats
};

export type TimeSeriesMetrics = {
  year: number,
  month: number, // compound pk (year, month)
  projects: Array<ProjectMetrics>,
  mbrStats: Array<MbrMetrics>
};

export type SumStats = {
  min: number,
  max: number,
  mean: number,
  median: number,
  Q1: number,
  Q3: number
};
