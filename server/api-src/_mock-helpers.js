const { round } = require('lodash');

/* @flow */

function rand(n: number = 1, r: number = 2): number {
  return round(Math.random() * n, r);
}

module.exports = {
  rand,
};
