const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.goToSearch = this.goToSearch.bind(this)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  goToSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='home-info'>
          <h1 className='title'>svideo</h1>
          <form onSubmit={this.goToSearch}>
            <input className='search'
              value={this.props.searchTerm}
              onChange={this.handleSearchTermEvent}
              type='text' placeholder='Search' />
          </form>
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </div>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
