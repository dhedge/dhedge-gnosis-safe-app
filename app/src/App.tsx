import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@gnosis.pm/safe-react-components";
import SafeProvider from '@gnosis.pm/safe-apps-react-sdk';
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
            <SafeProvider>
                <GlobalState.Provider value={[state, setState]}>
                    <ProviderContainer />
                </GlobalState.Provider>
            </SafeProvider>
        </ThemeProvider>
    )
}

export default App
