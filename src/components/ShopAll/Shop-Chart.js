import React from 'react'
import threeDots from '../../assets/icons/threeDots.svg'
import * as d3 from 'd3'
import moment, { ISO_8601, updateLocale } from 'moment'

var getWeekDay = function(d = new Date()) {
    var weekOfday = moment(d).format('E'); // which day in this week
    var weekDays = []
    for(let i = 1; i < 8; i++) {
        var _day = {}
        _day.day = moment().subtract(weekOfday-i, 'days').calendar()
        _day.weekDay = moment().subtract(weekOfday-i, 'days').format('ddd')
        weekDays.push(_day)
    }
    return weekDays
}

// format the value of input
var today = function() {
    return new Date().toISOString().substr(0, 10)
}

class ShopChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: today()
        };
        this.handleChange = this.handleChange.bind(this);
        this.drawPolyline = this.drawPolyline.bind(this)
        this.chartWrapper = React.createRef();
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }

    drawPolyline() {
        var options = {
            width: 500,
            height: 500,
            svg_class: 'polyline',
            data: getWeekDay(this.state.value)
        }
        var n = options.data.length
        var xScale = d3.scaleLinear()
            .domain([0, n-1])
            .range([0, options.width])
        var yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([options.height, 0])

        var svg = d3.select(this.chartWrapper.current)
            .append('svg')
            .attr('width', options.width)
            .attr('height', options.height)
            .attr('class', options.svg_class)
        var _g = svg.append('g')

        
    }
    componentDidMount() {
        this.drawPolyline()
    }

    render() {
        return(
            <div className="shop-chart">
                <div className="chart-head">
                    <p>会员与消费分析</p>
                    <div className="chart-head-right">
                        <input type="date" value={this.state.value} onChange={this.handleChange}/>
                        <img src={threeDots} />
                    </div>
                </div>
                <div className="chart-wrapper" ref={this.chartWrapper} >
                </div>
            </div>
        )
    }
}

export default ShopChart;