const React = require('react')
const { IndexRoute, Router, Route, browserHistory } = require('react-router')
const { Provider } = require('react-redux')
const Details = require('./details')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const { store } = require('./Store')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
