const Ruler = require('.')
const html = require('bel')

const ruler = Ruler()

const el = html`
  <svg width=600 height=40>
    ${ruler.render({ width: 600, height: 30, cellWidth: 20 })}
  </svg>
`

document.body.appendChild(el)
