const {mockBizTypeDist} = require('./mock-index.js');

/* @flow */

function getBizTypeDisttData(req: any, res: any, next: any) {
  res.json(mockBizTypeDist());
}

module.exports = getBizTypeDisttData;
