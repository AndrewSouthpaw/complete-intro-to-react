const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <header className='header'>
        </header>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details
