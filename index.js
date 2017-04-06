'use strict'

const html = require('bel')

module.exports = (
  {
    width,
    height,
    cellWidth
  }
) => html`
  <g>
    <rect width=${width} height=${height - 2} fill="hsl(0, 0%, 30%)" />
    <g>
      ${Array(Math.ceil(width / cellWidth)).fill(0).map((_, i) => html`
        <line
          x1=${i * cellWidth}
          y1=${height / 1.3}
          x2=${i * cellWidth}
          y2=${height - 2}
          stroke="hsl(0, 0%, 60%)"
        />
      `)}
    </g>
    <line x1=0 y1=${height - 2} x2=${width} y2=${height - 2} stroke="black" />
    <line x1=0 y1=${height - 1} x2=${width} y2=${height - 1} stroke="hsla(0, 0%, 0%, 0.5)" />
  </g>`
