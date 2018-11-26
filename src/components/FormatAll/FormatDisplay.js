import React from 'react';
import axios from 'axios';

import HoverTooltip from './Format-tooltip';
import RingChartCPNT from './Format-ring-chart-component';
const mockdata = [
  {
    year: 2016,
    month: 1,
    week: 1,
    bizType: '餐饮',
    area: 7.53,
    areaPct: 0.06,
    sales: 952.9,
    salesPct: 1,
    salesLP: 0.14,
    salesSPLY: 0.21,
    spa: 0.11,
    spaLP: 0.74,
    spaSPLY: 0.37,
    ros: 0.26,
    rosLP: 0.76,
    rosSPLY: 0.08,
    rosRange: [0.08, 0.11]
  },
  {
    year: 2016,
    month: 1,
    week: 1,
    bizType: '超市',
    area: 39.76,
    areaPct: 0.84,
    sales: 505.1,
    salesPct: 0.62,
    salesLP: 0.82,
    salesSPLY: 0.4,
    spa: 0.26,
    spaLP: 0.05,
    spaSPLY: 0.07,
    ros: 0.12,
    rosLP: 0.17,
    rosSPLY: 0.79,
    rosRange: [0.02, 0.6]
  },
  {
    year: 2016,
    month: 1,
    week: 1,
    bizType: '配套服务',
    area: 21.53,
    areaPct: 0.45,
    sales: 993.35,
    salesPct: 0.67,
    salesLP: 0.59,
    salesSPLY: 0.11,
    spa: 0.25,
    spaLP: 0.79,
    spaSPLY: 0.89,
    ros: 0.73,
    rosLP: 0.99,
    rosSPLY: 0.17,
    rosRange: [0.07, 0.47]
  },
  {
    year: 2016,
    month: 1,
    week: 1,
    bizType: '零售',
    area: 6.44,
    areaPct: 0.09,
    sales: 524.35,
    salesPct: 0.27,
    salesLP: 0.52,
    salesSPLY: 0.64,
    spa: 0.6,
    spaLP: 0.46,
    spaSPLY: 0.98,
    ros: 0.4,
    rosLP: 0.67,
    rosSPLY: 0.55,
    rosRange: [0.09, 0.46]
  },
  {
    year: 2016,
    month: 1,
    week: 1,
    bizType: '休闲娱乐',
    area: 8.34,
    areaPct: 0.94,
    sales: 475.9,
    salesPct: 0.84,
    salesLP: 0.3,
    salesSPLY: 0.43,
    spa: 0.99,
    spaLP: 0.47,
    spaSPLY: 0.77,
    ros: 0.6,
    rosLP: 0.13,
    rosSPLY: 0.71,
    rosRange: [0.13, 0.24]
  }
];

const bizTypeArray = {
  food: '餐饮',
  market: '超市',
  service: '配套服务',
  clothes: '零售',
  entertainment: '休闲娱乐',
  full: 'full'
};
class FormatDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opts1: {
        data: mockdata,
        fieldToDraw: 'area',
        keyField: 'bizType',
        width: 300, // svg dimension
        height: 300,
        center: [150, 150], // center relative to top-left corner of svg
        outterRadius: 100,
        innerRadius: 50,
        shadowLength: 10,
        wrapperDivClass: 'RingChart-wrapper-1',
        svgClassName: 'RingChart-1'
      },
      opts2: {
        data: [{ sales: 1, bizType: 'a' }, { sales: 2, bizType: 'b' }],
        fieldToDraw: 'sales',
        keyField: 'bizType',
        width: 200,
        height: 200,
        center: [100, 100],
        outterRadius: 50,
        innerRadius: 25,
        shadowLength: 10,
        wrapperDivClass: 'RingChart-wrapper-2',
        svgClassName: 'RingChart-2'
      }
    };
  }
  changeFieldToDraw(field) {
    let newState = Object.assign({}, this.state);
    newState.opts1.fieldToDraw = field;
    this.setState(newState);
  }

  componentDidMount() {
    const reqURL = `http://localhost:5000/api/data/tenant-operation-monitor?bizType=${
      this.props.testdata
    }&year=2016&month=1&week=2`;

    axios.get(reqURL).then(res => {
      this.setState({ renderData: res.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // axios
    //   .get(
    //     `http://localhost:5000/api/data/tenant-operation-monitor?bizType=${
    //       bizTypeArray[prevProps.testdata]
    //     }&year=2016&month=1`
    //   )
    //   .then(res => {
    //     this.setState(prevState => ({
    //       renderData: res.data
    //     }));
    //   });
  }

  render() {
    return (
      <div className='formatDisplayWrapper'>
        <div className='container'>
          <HoverTooltip />
          <button
            type='button'
            onClick={() => this.changeFieldToDraw.bind(this)('area')}>
            面积
          </button>
          <button
            type='button'
            onClick={() => this.changeFieldToDraw.bind(this)('sales')}>
            营业额
          </button>
          <RingChartCPNT options={this.state.opts1} />
          <RingChartCPNT options={this.state.opts2} />
          {/* <RingChartCPNT options={this.state.opts2}/> */}
        </div>
      </div>
    );
  }
}

export default FormatDisplay;
