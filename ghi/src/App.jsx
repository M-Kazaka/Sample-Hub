// This makes VSCode check types as if you are using TypeScript
//@ts-check
{
  /* Main Imports */
}
import React from 'react'
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation,
  // Navigate,
} from 'react-router-dom'
import ErrorNotification from './components/ErrorNotification'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
{
  /*Splash Page */
}
import SplashPage from './SplashPage'


function App() {
  // const [count, setCount] = useState(0)
  const [error] = useState(null)

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <ErrorNotification error={error} />
          <Routes>
              <Route path='/' element={<SplashPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App

{/* <div className='card'>
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
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
  </div> */}