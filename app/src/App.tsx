import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@gnosis.pm/safe-react-components";
import { Loader, Title } from "@gnosis.pm/safe-react-components";
import SafeProvider from '@rmeissner/safe-apps-react-sdk';
import GlobalStyle from "./GlobalStyle";
import StepperContainer from "containers/StepperContainer";
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
            <SafeProvider loading={(
                <>
                    <Title size="md">Waiting for Safe...</Title>
                    <Loader size="md" />
                </>
            )}>
                <GlobalState.Provider value={[state, setState]}>
                    <StepperContainer />
                </GlobalState.Provider>
            </SafeProvider>
        </ThemeProvider>
    )
}

export default App
