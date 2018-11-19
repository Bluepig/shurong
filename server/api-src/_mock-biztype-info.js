const { range, round, fromPairs } = require("lodash");
const { sum } = require('d3');
const { rand } = require("./_mock-helpers");

/* @flow */

// [面积, 销售额, 租售比] * 5业态

const BizTypes = ['food', 'leisure', 'grocery', 'retail', 'office', 'service'];
const DistCategories = ['面积', '销售额', '租售比'];

type BizTypeDist = {
  food: number, // 餐饮
  leisure: number, // 娱乐
  grocery: number, // 超市
  retail: number, // 零售
  office: number, // 写字楼
  service: number // 配套服务
}

type NamedDist = {
  name: string, // 分布名称
  dist: BizTypeDist // 对应各类业态百分比
}


function sumOneStandarize(data: Array < [string, number] > ): Array < [string, number] > {
  let s: number = sum(data, d => d[1]);
  return data.map(item => [item[0], round(item[1] / s, 2)]);
}

function randomBizTypeDist(): BizTypeDist {
  let d: Array < [string, number] > = sumOneStandarize(BizTypes.map(t => [t, rand()]));
  return fromPairs(d);
}

function mockBizTypeDist(): Array < NamedDist > {
  return DistCategories.map(t => ({
    name: t,
    dist: randomBizTypeDist(),
  }));
}

module.exports = mockBizTypeDist;
