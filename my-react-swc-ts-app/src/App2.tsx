//for arrow function

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

/**
 * Basically this is another version of App.tsx using the arrow function method
 */
interface Props  {
    name?: string,
    value?: string,
}

/**
 * For situations when using typescript, you declare the type of the function being React.FC
 * 
 * Situations where props are being used, you pass them
 */

/**
 *  name and value are flagged because they are destructured and never actually ever referenced/used in the code
 */
/**
 * two ways to solve this is by:
 * 1) removing the name and value  
 * 2) or putting an underscore, which signals that the props are intentionally unused
 */

//  const App2: React.FC<Props> = ({name,value}) => {
const App2: React.FC<Props> = ({name:_name, value:_value}) => {
    const [count, setCount] = useState(0)

    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
}

export default App2