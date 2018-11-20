// @flow
/* 业态详情 */
// [面积, 销售额, 租售比] * 5业态
export type BizTypeDist = {
  food: number, // 餐饮
  leisure: number, // 娱乐
  grocery: number, // 超市
  retail: number, // 零售
  office: number, // 写字楼
  service: number // 配套服务
};

export type NamedDist = {
  name: string, // 分布名称
  dist: BizTypeDist // 对应各类业态百分比
};
