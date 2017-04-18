'use strict'

const html = require('bel')
const Component = require('nanocomponent')
const inherits = require('util').inherits
const morph = require('nanomorph')

module.exports = Ruler
inherits(Ruler, Component)

function Ruler() {
  if (!(this instanceof Ruler)) return new Ruler()
  Component.call(this)
  this.width = null
  this.height = null
  this.x = null
  this.y = null
  this.cellWidth = null
}

Ruler.prototype._render = function (opts) {
  const width = this.width = opts.width
  const height = this.height = opts.height
  const x = this.x = opts.x || 0
  const y = this.y = opts.y || 0
  const cellWidth = this.cellWidth = opts.cellWidth
  const updated = html`
    <g transform="translate(${x}, ${y})">
      <rect width=${width} height=${height - 2} fill="hsl(0, 0%, 30%)" />
      <g>
        ${Array(Math.ceil(width / cellWidth)).fill(0).map((_, i) => html`
          <line
            x1=${i * cellWidth}
            y1=${i % 4 === 0
              ? height / 1.4
              : height / 1.3}
            x2=${i * cellWidth}
            y2=${height - 2}
            stroke=${i % 4 === 0
              ? 'hsl(0, 0%, 60%)'
              : 'hsl(0, 0%, 50%)'}
          />
        `)}
      </g>
      <line x1=0 y1=${height - 2} x2=${width} y2=${height - 2} stroke="black" />
      <line x1=0 y1=${height - 1} x2=${width} y2=${height - 1} stroke="hsla(0, 0%, 0%, 0.5)" />
    </g>`
  if (this._element) morph(this._element, updated)
  else this._element = updated
  return this._element
}

Ruler.prototype._update = function (opts) {
  return opts.width !== this.width
    || opts.height !== this.height
    || opts.x !== this.x
    || opts.y !== this.y
    || opts.cellWidth !== this.cellWidth
}

