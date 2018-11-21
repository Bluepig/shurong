const {mockTenantOperation} = require("./mock-index.js");

/*  业态详情 */

function getTenantOperationData(req, res, next) {
  // Fake Data
  const {TenantOperationData, BizTypeOperationData} = mockTenantOperation();
  // shopName or bizType
  // optional year month week
  let {shopName, bizType, year, month, week} = req.query;
  year = +year;
  month = +month;
  week = +week;

  let data = TenantOperationData.slice();
  let bizData = BizTypeOperationData.slice();

  if (year) data = data.filter(o => o.year === year);
  if (month) data = data.filter(o => o.month === month);
  if (week) data = data.filter(o => o.week === week);

  if (year) bizData = bizData.filter(o => o.year === year);
  if (month) bizData = bizData.filter(o => o.month === month);
  if (week) bizData = bizData.filter(o => o.week === week);

  if (!(shopName || bizType)) {
    res.status(400).json("Specify shop name or biz type");
    return
  } else

  // shop data
  data = data.filter(o => (shopName && shopName !== 'full' ? o.name === shopName : true));
  bizData = bizData.filter(o => (bizType && bizType !== 'full' ? o.bizType === bizType : true));

  if (shopName) {
    res.status(200).json(data);
  } else if (bizType) {
    res.status(200).json(bizData);
  }
}

module.exports = getTenantOperationData;
