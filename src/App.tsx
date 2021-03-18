import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@gnosis.pm/safe-react-components";
import GlobalStyle from "./GlobalStyle";
import { ProviderContainer } from "containers";
import { GlobalState } from 'GlobalState'
import { StateInterface } from 'types/state.types';

interface IProps {
    initialState: StateInterface;
}

const App: React.FC<IProps> = props => { 
    const [state, setState] = useState(props.initialState)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GlobalState.Provider value={[state, setState]}>
                <ProviderContainer />
            </GlobalState.Provider>
        </ThemeProvider>
    )
}

export default App
