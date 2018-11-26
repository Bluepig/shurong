/* Ring Chart D3 Renderer */
import React from 'react';
import FormatRingChart from './Format-ring-chart';

class RingChartCPNT extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperElement = React.createRef();
    this.chart = new FormatRingChart();
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
