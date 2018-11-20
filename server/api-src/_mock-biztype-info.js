/* @flow */
// $FlowFixMe
const {range, round, fromPairs} = require("lodash");
// $FlowFixMe
const {sum} = require("d3");
const {rand} = require("./_mock-helpers");

import type {BizTypeDist, NamedDist} from "./type-def/biztype-info";

const BizTypes = ["food", "leisure", "grocery", "retail", "office", "service"];
const DistCategories = ["面积", "销售额", "租售比"];

function sumOneStandarize(
  data: Array<[string, number]>
): Array<[string, number]> {
  let s: number = sum(data, d => d[1]);
  return data.map(item => [item[0], round(item[1] / s, 2)]);
}

function randomBizTypeDist(): BizTypeDist {
  let d: Array<[string, number]> = sumOneStandarize(
    BizTypes.map(t => [t, rand()])
  );
  return fromPairs(d);
}

function mockBizTypeDist(): Array<NamedDist> {
  return DistCategories.map(t => ({
    name: t,
    dist: randomBizTypeDist()
  }));
}

module.exports = mockBizTypeDist;
