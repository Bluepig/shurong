# 11-8 Note:

-   Server DB initial setting

    -   local db server running on `localhost:27017`
    -   default db name: `myDB`

-   production API server (production back-end, don't confuse with react-webpack server for development)

    -   listen to local 5000, start by `yarn start-server`

-   **Add Packages**
    -   mongodb & d3

# 11-12 Note:

-   Added loader for sasa functionalities
    Adder UI framework BULMA

-   TO DO:
    Styling sidebar

-   **Add Packages**
    -   react-bulma-components & node-sass

# 11-13 Note:

-   Finished styling the sidebar

-   TO DO:
    Add topbar & visulization components

# 11-15 Note:

-   **Server Build** _Transpile Server code before kick-start server_ `yarn build-server`
-   **API**

    1.  **项目资产管理页面**

        `localhost:5000/api/data/assets-mgmt[?{years}&{months}&{projids}]`

        > e.g GET localhost:5000/api/data/assets-mgmt?years=2016&months=1-3-6&projids=0-1

    -   `years` can be _omitted_ or single year `2016` or multiple hyphen-separated years like `2016-2017-2018`;

        > currently only support query for years 2016 - 2018;
        > omitting years will return data of every year

    -   `months` can be _omitted_ or single month `12` or multiple hyphen-separated months like `1-4-6`;

        > omitting months will return data of every month

    -   `projids` can be _omitted_ or single id `1` or multiple hyphen-separated projids like `0-2`;

        > omitting projids will return data of every project

    -   _Return_:

        ```javascript
        type Returned = Array < TimeSeriesMetrics >

        type TimeSeriesMetrics = {
            year: number,
            month: number, // compound pk (year, month)
            projects: Array < ProjectMetrics >
        };

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
        };
        ```

    2.  **项目监测页面**

        `localhost:5000/api/data/project-monitor[?{years}&{months}&{projids}]`

        > e.g GET localhost:5000/api/data/project-monitor?years=2016&months=1-3-6&projids=0-1

    -   `years` can be _omitted_ or single year `2016` or multiple hyphen-separated years like `2016-2017-2018`;

        > currently only support query for years 2016 - 2018;
        > omitting years will return data of every year

    -   `months` can be _omitted_ or single month `12` or multiple hyphen-separated months like `1-4-6`;

        > omitting months will return data of every month

    -   `projids` can be _omitted_ or single id `1` or multiple hyphen-separated projids like `0-2`;

        > omitting projids will return data of every project

    -   _Return_:

        ```javascript
        type Returned = Array < TimeSeriesMetrics >

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
        };

        type TimeSeriesMetrics = {
            year: number,
            month: number, // compound pk (year, month)
            projects: Array < ProjectMetrics >,
            mbrStats: Array < MbrMetrics >
        };

        type MbrMetrics = {
            projectID: number, // mbr metrics of project id
            count: number, // 会员数量
            wechatFansCount: number, // 公众号粉丝数量
            newMbrCount: number, // 新增会员数量
            purchaseFreqStats: SumStats, // 购买频次归纳 Stats
            stayLengthStats: SumStats // 停留时间长 Stats
        };

        type SumStats = {
            min: number,
            max: number,
            mean: number,
            median: number,
            Q1: number,
            Q3: number
        };
        ```

# 11-19 Note:

-   **API**

1.  业态分布
    `localhost:5000/api/data/biztype-monitor`

    -   _Return_:

        ```javascript
        type Returned = Array < NamedDist >

        type NamedDist = {
          name: string, // 分布名称
          dist: BizTypeDist // 对应各类业态百分比
        }

        type BizTypeDist = {
          food: number, // 餐饮
          leisure: number, // 娱乐
          grocery: number, // 超市
          retail: number, // 零售
          office: number, // 写字楼
          service: number // 配套服务
        }
        ```
