
# svg-daw-ruler

A ruler element commonly used in DAWs.

![screenshot](screenshot.png)

## Usage

```js
const Ruler = require('svg-daw-ruler')
const html = require('bel')

const ruler = Ruler()

const el = html`
  <svg width=600 height=40>
    ${ruler.render({ width: 600, height: 30, cellWidth: 20 })}
  </svg>
`

document.body.appendChild(el)
```

## License

MIT
