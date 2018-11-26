import React from 'react';

function HoverTooltip(props) {
  const initTooltipStyle = {
    position: 'absolute',
    display: 'none',
    fontFamily: 'sans-serif'
  };
  return <div id='hover-tooltip' style={initTooltipStyle} />;
}

export default HoverTooltip;
