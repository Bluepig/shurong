// @flow
/* 项目资产管理 */
// 时间节点 * 项目ID * 指标项目

export type ProjectMetrics = {
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

export type TimeSeriesMetrics = {
  year: number,
  month: number, // compound pk (year, month)
  projects: Array < ProjectMetrics >
};
