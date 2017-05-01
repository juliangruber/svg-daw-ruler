'use strict'

const html = require('bel')
const component = require('microcomponent')

module.exports = () => {
  const c = component({
    name: 'svg-daw-ruler',
    pure: true
  })
  c.on('render', () => html`
    <g transform="translate(${c.props.x || 0}, ${c.props.y || 0})">
      <rect width=${c.props.width} height=${c.props.height - 2} fill="hsl(0, 0%, 30%)" />
      <g>
        ${Array(Math.ceil(c.props.width / c.props.cellWidth)).fill(0).map((_, i) => html`
          <line
            x1=${i * c.props.cellWidth}
            y1=${i % 4 === 0
              ? c.props.height / 1.4
              : c.props.height / 1.3}
            x2=${i * c.props.cellWidth}
            y2=${c.props.height - 2}
            stroke=${i % 4 === 0
              ? 'hsl(0, 0%, 60%)'
              : 'hsl(0, 0%, 50%)'}
          />
        `)}
      </g>
      <line x1=0 y1=${c.props.height - 2} x2=${c.props.width} y2=${c.props.height - 2} stroke="black" />
      <line x1=0 y1=${c.props.height - 1} x2=${c.props.width} y2=${c.props.height - 1} stroke="hsla(0, 0%, 0%, 0.5)" />
    </g>
  `)
  return c
}
