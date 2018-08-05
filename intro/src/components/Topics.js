import React from 'react'
import {Link, Route} from 'react-router-dom'

function Topic(props) {
  console.log('props to topci', props)
  return <h3>{props.match.params.topicId}</h3>
}

export default function Topics(props) {
  console.log('props to topcis', props)
  return (
    <div>
      <h2>Topcis</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to='/topics/components'>React Components</Link>
        </li>
        <li>
          <Link to='/topics/props-v-state'>Props vs. State</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${props.match.path}/:topicId`} component={Topic} />
    </div>
  )
}