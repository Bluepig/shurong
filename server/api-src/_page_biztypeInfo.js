const {mockBizTypeDist} = require('./mock-index.js');

/*  业态详情 */

function getBizTypeDisttData(req, res, next) {
  res.json(mockBizTypeDist());
}

module.exports = getBizTypeDisttData;
