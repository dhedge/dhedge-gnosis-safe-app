import Web3 from 'web3';
import { initialState as state } from 'GlobalState'
import { StateInterface } from 'types/state.types'
import { SYNTH_ADDRESS } from 'utils/const'
import ERC20 from 'contracts/ERC20.json'

// configure initial state
const configureStore = async () => {
    const web3 = new Web3(Web3.givenProvider || 'https://api.mycryptoapi.com/eth')
    // const sUSDContract = new web3.eth.Contract(ERC20.abi, SYNTH_ADDRESS.mainnet.SUSD)
    const initialState: StateInterface = {
      ...state,
      web3
    }
    console.log('✓ Created Store')
    return { initialState }
}
  
  export { configureStore }