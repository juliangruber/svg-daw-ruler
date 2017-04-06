'use strict'

const html = require('bel')

module.exports = ({
  width,
  height,
  cellWidth
}) => html`
  <g>
    <rect width=${width} height=${height} fill="hsl(0, 0%, 30%)" />
    ${Array(Math.ceil(width / cellWidth)).fill(0).map((_, i) => html`
      <line
        x1=${i * cellWidth}
        y1=${height / 1.2}
        x2=${i * cellWidth}
        y2=${height}
        stroke="hsl(0, 0%, 60%)"
      /> 
    `)}
  </g>`
