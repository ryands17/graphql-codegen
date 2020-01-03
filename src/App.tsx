import React from 'react'
import { Countries } from 'components/Countries'

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>Countries</h2>
      <Countries />
      <footer>
        <strong>Provided by: </strong>
        <a
          href="https://github.com/trevorblades"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trevor Blades
        </a>
        <br />
        <strong>Repo: </strong>
        <a
          href="https://github.com/trevorblades/countries"
          target="_blank"
          rel="noopener noreferrer"
        >
          A GraphQL API for information about countries
        </a>
      </footer>
    </div>
  )
}

export default App
