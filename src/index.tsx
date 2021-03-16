import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from 'config/configureStore'

configureStore()
  .then(({ initialState }) => {
    ReactDOM.render(
      <React.StrictMode>
        <App initialState = { initialState }/>
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch(err => {
    console.log(err)
    ReactDOM.render(
      <React.StrictMode>
        <div>
          <h1>Loading</h1>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
