# 11-8 Note:

- production API server (production back-end, don't confuse with react-webpack server for development)

  - listen to local 5000, start by `yarn start-server`

# 11-12 Note:

- Added loader for sasa functionalities
  Adder UI framework BULMA

- TO DO:
  Styling sidebar

- **Add Packages**
  - react-bulma-components & node-sass

# 11-13 Note:

- Finished styling the sidebar

- TO DO:
  Add topbar & visulization components

# 11-15 Note:

- **Server Build** `yarn build-server` _Transpile Server code before kick-start server_
- **API**

  1.  **项目资产管理页面**

      `/api/data/assets-mgmt[?{years}&{months}&{projids}]`

      > e.g GET /api/data/assets-mgmt?years=2016&months=1-3-6&projids=0-1

  - `years` can be _omitted_ or single year `2016` or multiple hyphen-separated years like `2016-2017-2018`;

    > currently only support query for years 2016 - 2018;

  - `months` can be _omitted_ or single month `12` or multiple hyphen-separated months like `1-4-6`;
  - `projids` can be _omitted_ or single id `1` or multiple hyphen-separated projids like `0-2`;

  - _Return_:

    ```javascript
    type Returned = Array<TimeSeriesMetrics>

    type TimeSeriesMetrics = {
      year: number,
      month: number, // compound pk (year, month)
      projects: Array<ProjectMetrics>
    }

    type ProjectMetrics = {
      projectID: number, // pk
      avgLeasingRate: number, // 平均出租率
      avgRent: number, // 平均租金
      faceRent: number, // 面价租金 误....意义不明.
      rentEarnRate: number, // 租金收益率
      capRate: number, // 资本化率
      noi: number, // NOI 营运净收入
      irr: number, // IRR 内部收益率
      npv: number // NPV 净现值
    }
    ```

  2.  **项目监测页面**

      `/api/data/project-monitor[?{years}&{months}&{projids}]`

      > e.g GET /api/data/project-monitor?years=2016&months=1-3-6&projids=0-1

  - `years` can be _omitted_ or single year `2016` or multiple hyphen-separated years like `2016-2017-2018`;

    > currently only support query for years 2016 - 2018;

  - `months` can be _omitted_ or single month `12` or multiple hyphen-separated months like `1-4-6`;

  - `projids` can be _omitted_ or single id `1` or multiple hyphen-separated projids like `0-2`;

  - _Return_:

    ```javascript
    type Returned = Array<TimeSeriesMetrics>

    type TimeSeriesMetrics = {
      year: number,
      month: number, // compound pk (year, month)
      projects: Array<ProjectMetrics>,
      mbrStats: Array<MbrMetrics>
    }

    type ProjectMetrics = {
      projectID: number, // project id
      category: string, // 'commercial' || 'office' 项目类型
      revenue: number, // 营业额
      sales: number, // 销售额
      salesPerSqMetre: number, // 坪效
      footfall: number, // 客流数量
      rentPriceRatio: number, // 租售比
      mbrSalesRatio: number, // 会员消费占比
      mbrRepurchaseRate: number, // 会员复购率
      rentPerSqMeter: number, // 单位面积租金
      gfa: number, // Gross Floor Area 总建筑面积
      nla: number, // Net Leasable Area 总可租面积
      pkCapacity: number // Parking Capacity 总车位数
    }

    type MbrMetrics = {
      projectID: number, // mbr metrics of project id
      count: number, // 会员数量
      wechatFansCount: number, // 公众号粉丝数量
      newMbrCount: number, // 新增会员数量
      purchaseFreqStats: SumStats, // 购买频次归纳 Stats
      stayLengthStats: SumStats // 停留时间长 Stats
    }

    type SumStats = {
      min: number,
      max: number,
      mean: number,
      median: number,
      Q1: number,
      Q3: number
    }
    ```

# 11-19 Note:

- **API**

1.  业态详情页面

Added header style

- **Add Packages**
  - react-collapsible

# 11-21 Note:

- **API**

1.  **业态详情页面**

    `/api/data/tenant-operation-monitor[ ? {bizType} & {shopName} & {year} & {month} & {week} ]`

    > e.g GET /api/data/tenant-operation-monitor?bizType=%E9%A4%90%E9%A5%AE&year=2016&month=10

    > _one of bizType or shopName must present in query, if both, return shop data_

    > _Chinese characters are url encoded for value of bizType and shopName parameter, simply use \`encodeURI(/_ string _/)\`_

    > _if year month week are all missing, return full time dataset of biz info or shop info, depending on existence of bizType or shopName_

- one of `bizType` and `shopName` must present, if value being `full`, return full dataset

- `year` can be _omitted_ or single year `2016`;

  > currently only support query for years 2016 - 2018;

- `month` can be _omitted_ or single month `12`;

- `week` can be _omitted_ or single value in range _[1, 2, 3, 4]_ for there are 4 weeks within one month;

- _Return_:

  ```javascript
  // if shopName presents
  type Returned = Array<TenantOperationRecord>
  // if bizType presents
  type Returned = Array<BizTypeOperationRecord>

  type BizTypeOperationRecord = {
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

  type TenantOperationRecord = {
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
    rosSPLY: number // 租售比 同比
  }
  ```

- **Add Packages**
  - axios for handling requests

# 11-22 Note:

- **React**

1.  Finished format list styling
2.  Added react router in AppRouter.js
3.  Removed App.js
4.  **TODO** : design react component / add life cycle methods for loading data

- **Add Packages**
  - react-router-dom

# 11-30 Note:

Yuan Tian

- **React**

Created Monitor Page. (Frameworkd nearly done)
Created Detail Page.

- **Add Packages**

  - echart
  - echarts-for-react
  - react-amap

  I added them on for web page test, it could be removed then data and d3 code are ready.

# 12-3 Note:
  Lily
- **React**
Created ShopPage (not finished)

- **Add Packages**
  - Moment( for dealing date)

# 12-5 Note

- **React**

1. Created LineChart for ShopPage
2. Created Format-line-chart Component

# 12-6 Note
- **React**
1. Created AbnormalPage
2. Created Format-SelectBar Component
3. Created FormatBlockHead Component