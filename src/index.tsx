import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from 'config/configureStore'
import SafeProvider from '@gnosis.pm/safe-apps-react-sdk';

configureStore()
  .then(({ initialState }) => {
    ReactDOM.render(
      <React.StrictMode>
        <SafeProvider>
          <App initialState = { initialState }/>
        </SafeProvider>
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
