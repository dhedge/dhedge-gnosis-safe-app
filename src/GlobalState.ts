import React, { createContext } from 'react'
import { StateInterface } from 'types/state.types';
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider);

const initialState: StateInterface = {
    activeStep: 0,
    createPool: false,
    web3
}

const initialContext: [StateInterface, React.Dispatch<React.SetStateAction<StateInterface>>] = [{ web3 }, () => ({})]

const GlobalState = createContext(initialContext)

export { GlobalState, initialState }
