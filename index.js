'use strict'

const html = require('bel')
const Component = require('nanocomponent')
const inherits = require('util').inherits

module.exports = Ruler
inherits(Ruler, Component)

function Ruler() {
  if (!(this instanceof Ruler)) return new Ruler()
  Component.call(this)
  this.width = null
  this.height = null
  this.cellWidth = null
}

Ruler.prototype._render = function (opts) {
  const width = this.width = opts.width
  const height = this.height = opts.height
  const cellWidth = this.cellWidth = opts.cellWidth
  return html`
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
}

Ruler.prototype._update = function (opts) {
  return opts.width !== this.width
    && opts.height !== this.height
    && opts.cellWidth !== this.cellWidth
}
