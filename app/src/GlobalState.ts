import React, { createContext } from 'react'
import { StateInterface } from 'types/state.types';
import Web3 from 'web3'
import initSdk from '@gnosis.pm/safe-apps-sdk';

const web3 = new Web3(Web3.givenProvider);
const appsSdk = initSdk();

const initialState: StateInterface = {
    activeStep: 0,
    web3,
    appsSdk
}

const initialContext: [StateInterface, React.Dispatch<React.SetStateAction<StateInterface>>] = [{ web3, appsSdk }, () => ({})]

const GlobalState = createContext(initialContext)

export { GlobalState, initialState }
