import React, { createContext } from 'react'
import { StateInterface } from 'types/state.types';

const initialState: StateInterface = {
    activeStep: 0
}

const initialContext: [StateInterface, React.Dispatch<React.SetStateAction<StateInterface>>] = [{}, () => ({})]

const GlobalState = createContext(initialContext)

export { GlobalState, initialState }
