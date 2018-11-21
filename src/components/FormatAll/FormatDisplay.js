import React from 'react';
import axios from 'axios';

class FormatDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/data/tenant-operation-monitor?bizType=full&year=2016&month=1&week=2`
      )
      .then(res => {
        console.log(res.data);
      });
  }
  render() {
    return <div className='formatDisplayWrapper'>This is format display</div>;
  }
}

export default FormatDisplay;
