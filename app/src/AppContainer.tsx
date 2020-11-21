import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@gnosis.pm/safe-react-components";
import { Loader, Title } from "@gnosis.pm/safe-react-components";
import SafeProvider from '@rmeissner/safe-apps-react-sdk';
import GlobalStyle from "./GlobalStyle";
import App from "./App";
import { GlobalState, initialState } from 'GlobalState'


const AppContainer: React.FC = () => { 
    const [state, setState] = useState(initialState)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SafeProvider loading={(
                <>
                    <Title size="md">Waiting for Safe...</Title>
                    <Loader size="md" />
                </>
                )}>
                <GlobalState.Provider value={[state, setState]}>
                    <App />
                </GlobalState.Provider>
                
            </SafeProvider>
        </ThemeProvider>
    )
}

export default AppContainer