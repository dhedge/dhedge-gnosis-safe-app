import Web3 from 'web3';
import { initialState as state } from 'GlobalState'
import { StateInterface } from 'types/state.types'

// configure initial state
const configureStore = async () => {
    const web3 = new Web3(Web3.givenProvider || 'https://api.mycryptoapi.com/eth')
    const initialState: StateInterface = {
      ...state,
      web3,
    }
    return { initialState }
}

export { configureStore }
