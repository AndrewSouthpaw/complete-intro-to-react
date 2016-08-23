const React = require('react')
const { IndexRoute, Router, Route, hashHistory } = require('react-router')
const { Provider } = require('react-redux')
const Details = require('./details')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const { store } = require('./Store')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App
