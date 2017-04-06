const ruler = require('.')
const html = require('bel')

const el = html`
  <svg width=600 height=40>
    ${ruler({
      width: 600,
      height: 30,
      cellWidth: 20
    })}
  </svg>
`

document.body.appendChild(el)
