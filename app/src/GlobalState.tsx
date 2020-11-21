import React, { createContext } from 'react'


interface StateInterface {
    activeStep?: number
}

const initialState: StateInterface = {
    activeStep: 0
}


const initialContext: [StateInterface, React.Dispatch<React.SetStateAction<StateInterface>>] = [{}, () => ({})]

const GlobalState = createContext(initialContext)

export { GlobalState, initialState }