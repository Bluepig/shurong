import React from 'react';
import axios from 'axios';
const myArray = {
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
      renderData: []
    };
  }
  componentDidMount() {
    const reqURL = `http://localhost:5000/api/data/tenant-operation-monitor?bizType=${
      this.props.testdata
    }&year=2016&month=1&week=2`;

    axios.get(reqURL).then(res => {
      this.setState({ renderData: res.data });
      console.log(this.state);
    });
  }

  componentWillReceiveProps(nextProps) {
    // const reqURL = `http://localhost:5000/api/data/tenant-operation-monitor?bizType=${
    //   nextProps.testdata
    // }&year=2016&month=1&week=2`;

    axios
      .get(
        `http://localhost:5000/api/data/tenant-operation-monitor?bizType=${
          myArray[nextProps.testdata]
        }&year=2016&month=1`
      )
      .then(res => {
        this.setState(prevState => ({
          renderData: res.data
        }));
        console.log(this.state);
      });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className='formatDisplayWrapper'>
        {this.state.renderData.map(item => {
          return <li key={item.area}>{item.areaPct}</li>;
        })}
      </div>
    );
  }
}

export default FormatDisplay;
