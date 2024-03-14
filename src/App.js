import React from 'react'
import ReactDOM from 'react-dom/client';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
    <Body/>
    </>
  )
}

root.render(<App/>)