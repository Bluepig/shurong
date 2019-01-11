import * as d3 from 'd3';

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

class RingChart {
  constructor() {
    // init when create by passing
    this._container = null;
    this._svg = null;
    this._g = null;
    this._data = null;
    this._shadowLength = null;
    // value to draw
    this._fieldToDraw = null;
    // init when create by infering from data
    this._colorRamp = null;
  }

  create(container, options) {
    /* Install Container */
    this._container = container;

    /* initialize svg */
    let {
      data,
      width,
      height,
      svgClassName,
      center,
      innerRadius,
      outterRadius,
      shadowLength,
      fieldToDraw,
      keyField
    } = options;

    // create svg
    this._svg = d3
      .select(this._container)
      .append('svg')
      .attr('class', svgClassName)
      .attr('width', width)
      .attr('height', height);

    // attach and position main group
    this._g = this._svg
      .append('g')
      .attr('class', 'mainGroup')
      .attr('transform', `translate(${center[0]}, ${center[1]})`);

    // draw & update graph
    this._data = data;
    this._innerR = innerRadius;
    this._outterR = outterRadius;
    this._shadowLength = shadowLength;
    this._colorRamp = this._makeColorRamp(this._data);

    this.update(keyField, fieldToDraw);
  }

  update(keyField, field) {
    // annotate dataset with angle attributes
    let pieGen = d3
      .pie()
      .value(d => d[field])
      .sort((a, b) => a[keyField].localeCompare(b[keyField]));
    // .padAngle(0.02)(this._data);

    let pie = pieGen(this._data); // data to bind

    // arc path string generator
    let arcMainGen = d3
      .arc()
      .innerRadius(this._innerR)
      .outerRadius(this._outterR);

    let arcShadowGen = d3
      .arc()
      .innerRadius(this._innerR + 1 - this._shadowLength)
      .outerRadius(this._innerR + 1);

    // selection
    let arcMain = this._g
      .selectAll('path.arc-main')
      .data(pie, d => d.data[keyField]);

    let arcShadow = this._g
      .selectAll('path.arc-shadow')
      .data(pie, d => d.data[keyField]);

    let tooltip = d3.select('#hover-tooltip');

    // draw main arcs
    // enter
    arcMain
      .enter()
      .append('path')
      .attr('class', 'arc-main')
      .each(function(d) {
        this._current = d;
      })
      .attr('d', function() {
        return arcMainGen(this._current);
      })
      .attr('fill', d => this._colorRamp(d.data[keyField]))
      // Events
      .on('mouseover', function(d) {
        // highight
        d3.select(this).attr('fill-opacity', 0.6);
      })
      .on('mousemove', function(d) {
        // tooltip follow cursor
        let { pageX, pageY } = d3.event;
        let msg = d.data[keyField] + '  ' + d.data[field] + '%';
        displayTooltip(tooltip, msg, pageX, pageY);
      })
      .on('mouseout', function() {
        // reverse highlight
        d3.select(this).attr('fill-opacity', 1);
        // hide tooltip
        hideTooltip(tooltip);
      });

    // update;
    arcMain
      .transition()
      .duration(150)
      .attrTween('d', mainArcTween);

    // draw shadow
    // enter
    arcShadow
      .enter()
      .append('path')
      .attr('class', 'arc-shadow')
      .attr('fill', d => this._colorRamp(d.data[keyField]))
      .attr('fill-opacity', 0.6)
      .each(function(d) {
        this._current = d;
      })
      .attr('d', function() {
        return arcShadowGen(this._current);
      });

    // update
    arcShadow
      .transition()
      .duration(150)
      .attrTween('d', shadowArcTween);

    // Easing Transition
    function mainArcTween(a) {
      let i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arcMainGen(i(t));
      };
    }
    function shadowArcTween(a) {
      let i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arcShadowGen(i(t));
      };
    }
  }

  delete() {
    this._container.remove();
  }

  _makeColorRamp() {
    return d3.scaleOrdinal().range(d3.schemePastel1);
  }
}

export default RingChart;
