const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => (
  <div>
    <MyTitle title='Whatevs' color='rebeccapurple' />
    <MyTitle title='Use props everywhere' color='peru' />
    <MyTitle title='LOLz' color='papayawhip' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
