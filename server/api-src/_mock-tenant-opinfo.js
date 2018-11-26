// $FlowFixMe
const { range, round, flatten, uniq } = require('lodash');

const fs = require('fs');

const path = require('path');

const { rand } = require('./_mock-helpers');

const TenantInfoData = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '..', 'persistance/Tenant-Info.json'),
    'utf-8'
  )
); // 3 y * 12 m * 4 w

const TenantOperationData = (() => {
  let uid = 0;
  return flatten(
    range(1, 3 * 12 * 4 + 1)
      .map(i => ({
        year: 2016 + Math.floor(i / (12 * 4)),
        month: Math.ceil((i / 4) % 12),
        week: (i % 4) + 1
      }))
      .map((t, i) => {
        return TenantInfoData.map(shop => ({
          id: ++uid,
          year: t.year,
          month: t.month,
          week: t.week,
          name: shop[0],
          bizType: shop[1],
          area: shop[2],
          areaPct: rand(1, 2),
          name: shop[0],
          sales: rand(400, 2),
          salesPct: rand(1, 2),
          salesLP: rand(1, 2),
          salesSPLY: rand(1, 2),
          spa: rand(1, 2),
          spaLP: rand(1, 2),
          spaSPLY: rand(1, 2),
          // rent: rand(300, 2),
          ros: rand(1, 2),
          rosLP: rand(1, 2),
          rosSPLY: rand(1, 2)
        }));
      })
  );
})();

const BizTypeOperationData = (() => {
  let uid = 0;
  return flatten(
    range(1, 3 * 12 * 4 + 1)
      .map(i => ({
        year: 2016 + Math.floor(i / (12 * 4)),
        month: Math.ceil((i / 4) % 12),
        week: (i % 4) + 1
      }))
      .map((t, i) => {
        return uniq(TenantInfoData.map(i => i[1])).map(bizType => ({
          id: ++uid,
          year: t.year,
          month: t.month,
          week: t.week,
          bizType: bizType,
          // 业态名称
          area: rand(40, 2),
          // 业态面积
          areaPct: rand(1, 2),
          // 业态面积 全场占比
          sales: rand(1000, 2),
          // 业态营业额
          salesPct: rand(1, 2),
          // 业态营业额 全场占比
          salesLP: rand(1, 2),
          // 业态营业额 环比 last period
          salesSPLY: rand(1, 2),
          // 业态营业额 同比 same period last year
          spa: rand(1, 2),
          // 业态坪效 sales per area
          spaLP: rand(1, 2),
          // 业态坪效 环比
          spaSPLY: rand(1, 2),
          // 业态坪效 同比
          ros: rand(1, 2),
          // 业态租售比 rent over sales
          rosLP: rand(1, 2),
          // 业态租售比 环比
          rosSPLY: rand(1, 2),
          // 业态租售比 同比
          rosRange: [
            round(Math.abs((rand(1, 2) - 0.5) / 2), 2),
            round((rand(1, 2) + 0.5) % 1, 2)
          ] // 业态
        }));
      })
  );
})();

function mockTenantOperation() {
  return {
    TenantOperationData,
    BizTypeOperationData
  };
}

module.exports = mockTenantOperation;
