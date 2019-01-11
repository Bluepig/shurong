/* Ring Chart D3 Renderer */
import React from 'react';
import RingChart from './_d3-ring-chart';

class RingChartCPNT extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperElement = React.createRef();
    this.chart = new RingChart();
  }

  componentDidMount() {
    this.chart.create(this.wrapperElement.current, this.props.options);
  }

  componentDidUpdate() {
    this.chart.update(
      this.props.options.keyField,
      this.props.options.fieldToDraw
    );
  }

  componnetWillUnmount() {
    this.chart.delete();
  }

  render() {
    return (
      <div
        className={this.props.options.wrapperDivClass}
        ref={this.wrapperElement}
      />
    );
  }
}

export default RingChartCPNT;
