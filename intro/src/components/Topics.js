import React from 'react'
import {Link, Route} from 'react-router-dom'

function Topic(props) {
  console.log('props to topci', props)
  return <h3>{props.match.params.topicId}</h3>
}

export default function Topics({match}) {
  console.log('match to topcis', match)
  return (
    <div>
      <h2>Topcis</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to='/topics/components'>React Components</Link>
        </li>
        <li>
          <Link to='/topics/props-v-state'>Props vs. State</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />

      <Route exact path={match.path} render={() => {
        return <h3>Please select a topic</h3>
      }} />

    </div>
  )
}