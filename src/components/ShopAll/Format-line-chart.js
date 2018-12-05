import * as d3 from 'd3'
import moment from 'moment'

function displayTooltip(selection, msg, x, y) {
    let tooltipOffset = 10;
    selection
    .style('left', x + tooltipOffset + 'px')
    .style('top', y - tooltipOffset + 'px')
    .style('display', 'block')
    .text(msg);
}
function hideTooltip(selection) {
selection.style('display', 'none');
}

class FormatLineChart {
    constructor() {
        this._container = null;
        this._svg = null;
        this._data = null;
        this._chartWidth = null;
        this._chartHeight = null;
        this._pickedDate = null;
        this._lineColor = null;
        this._toolTip = null;
        this._d3 = d3;
    }
    create(container, options) {
        let {
            pickedDate,
            data,
            svgWidth,
            svgHeight,
            margin,
            svgClassName,
            lineColor,
        } = options

        // bind value of options
        this._container = container
        this._data = data
        this._chartWidth = svgWidth - margin*2
        this._chartHeight = svgHeight - margin*2
        this._pickedDate = pickedDate
        this._lineColor = lineColor
        // define x scale range
        var xRange = []
        var space = this._chartWidth/6
        for (let i = 0; i < 7; i++) {
            xRange.push(space * i)
        }
        // Set the ranges
        var x = d3.scaleOrdinal()
            .domain(['Mon', 'Thu', 'Thur', 'Wen', 'Fri', 'Sat', 'Sun'])
            .range(xRange)
        var y = d3.scaleLinear()
            .domain([0, 1000])
            .range([this._chartHeight, 0]);

        // Define the axes
        var xAxis = d3.axisBottom(x).ticks(5)
        var yAxis = d3.axisLeft(y)

        // Define the svg
        this._svg = d3.select(this._container)
            .append("svg")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("viewBox", "0 0 1000 500")
            .attr("class", svgClassName)
            .append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")")

        // Draw lines
        this.drawLine('food')
        this.drawLine('market')
        this.drawLine('service')

        // Add the X Axis
        this._svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this._chartHeight + ")")
            .call(xAxis)

        // Add the Y Axis
        this._svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    }
    drawLine (key) {
        let tooltip = d3.select('#hover-tooltip');
        // Set the ranges
        var xRange = []
        var space = this._chartWidth/6
        for (let i = 0; i < 7; i++) {
            xRange.push(space * i)
        }
        var x = d3.scaleOrdinal()
            .domain(['Mon', 'Thu', 'Thur', 'Wen', 'Fri', 'Sat', 'Sun'])
            .range(xRange)
        var y = d3.scaleLinear()
            .domain([0, 1000])
            .range([this._chartHeight, 0]);
        // Define the line
        var formatLine = this._d3.line()
            .x(d => x(d.time))
            .y(d => y(d[key].sales))
            // .curve(d3.curveCatmullRom.alpha(0.5))

        // Draw the line
        this._svg.append('g')
            .attr('class', 'mainGroup')
            .selectAll('path.line-main')
            .data(this._data)
            .enter()
            .append("path")
            .attr("class", key + "line")
            .attr("d", formatLine(this._data))
            .attr('stroke', this._lineColor[key])
            .attr('stroke-width', 3)
            .style('fill', 'none')
            .on('mousemove', function(d) {
                let { pageX, pageY } = d3.event;
                let msg = d[key].bizType;
                displayTooltip(tooltip, msg, pageX, pageY);
            })
            .on('mouseout', function(){
                hideTooltip(tooltip)
            })
    }
    updateWeekTime (d) {
        var weekOfday = moment(d).format('E'); // which day in this week
        var weekDays = []
        for(let i = 1; i < 8; i++) {
            var _day = {}
            _day.day = moment().subtract(weekOfday-i, 'days').format()
            _day.weekDay = moment().subtract(weekOfday-i, 'days').format('ddd')
            weekDays.push(_day)
        }
        return weekDays
    }
}

export default FormatLineChart;