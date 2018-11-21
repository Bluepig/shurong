// @flow
/* 业态详情 */
export type TenantInfoRecord = [
  string, // 商店名称
  string, // 业态种类
  number // 商店面积
];

export type BizTypeOperationRecord = {
  year: number, // 年份
  month: number, // 月份
  week: number, // 周数
  bizType: string, // 业态名称
  area: number, // 业态面积
  areaPct: number, // 业态面积 全场占比
  sales: number, // 业态营业额
  salesPct: number, // 业态营业额 全场占比
  salesLP: number, // 业态营业额 环比 last period
  salesSPLY: number, // 业态营业额 同比 same period last year
  spa: number, // 业态坪效 sales per area
  spaLP: number, // 业态坪效 环比
  spaSPLY: number, // 业态坪效 同比
  ros: number, // 业态租售比 rent over sales
  rosLP: number, // 业态租售比 环比
  rosSPLY: number, // 业态租售比 同比
  rosRange: [number, number] // 业态
}

export type TenantOperationRecord = {
  year: number, // 年份
  month: number, // 月份
  week: number, // 周数
  name: string, // 商店名称
  bizType: string, // 业态种类
  area: number, // 商店面积
  areaPct: number, // 面积 业态 占比
  name: string, // 商店名称
  sales: number, // 营业额
  salesPct: number, // 营业额 业态占比
  salesLP: number, // 营业额 环比 last period
  salesSPLY: number, // 营业额 同比 same period last year
  spa: number, // 坪效 sales per area
  spaLP: number, // 坪效 环比
  spaSPLY: number, // 坪效 同比
  rent: number, // 租金
  ros: number, // 租售比 rent over sales
  rosLP: number, // 租售比 环比
  rosSPLY: number, // 租售比 同比
};
