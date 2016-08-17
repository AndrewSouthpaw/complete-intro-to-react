var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({ title: 'Props are great', color: 'rebeccapurple' }),
    ce(MyTitle, { title: 'Use props everywhere', color: 'peru' })
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
