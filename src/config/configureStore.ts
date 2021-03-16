import Web3 from 'web3';
import { initialState as state } from 'GlobalState'
import { StateInterface } from 'types/state.types'
import initSdk from '@gnosis.pm/safe-apps-sdk';



// configure initial state
const configureStore = async () => {
    const web3 = new Web3(Web3.givenProvider || 'https://api.mycryptoapi.com/eth')
    const appsSdk = initSdk();
    const initialState: StateInterface = {
      ...state,
      web3,
      appsSdk
    }
    return { initialState }
}

export { configureStore }
