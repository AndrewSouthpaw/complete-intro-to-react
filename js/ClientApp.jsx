const React = require('react')
const ReactDOM = require('react-dom')
const Details = require('./details')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const { IndexRoute, Router, Route, hashHistory } = require('react-router')
const { shows } = require('../public/data')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} shows={shows} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
