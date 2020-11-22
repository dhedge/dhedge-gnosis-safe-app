import React, { useCallback, useState, useContext } from 'react';
import styled from "styled-components";
import { Button, Loader } from "@gnosis.pm/safe-react-components";
import { useSafe } from '@rmeissner/safe-apps-react-sdk';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { GlobalState } from 'GlobalState'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#A1D2CA',
      main: '#008C73',
      dark: '#005546',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5D6D74',
      main: '#001428',
      dark: '#001428',
      contrastText: '#fff',
    },
  },
});

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const StepperContainer: React.FC = () => {
  const safe = useSafe()  
  const [submitting, setSubmitting] = useState(false)
  const [state, setState] = useContext(GlobalState)
  const submitTx = useCallback(async () => {
    setSubmitting(true)
    try {
      const safeTxHash = await safe.sendTransactions([
        {
          "to": safe.info.safeAddress,
          "value": "0",
          "data": "0x"
        }
      ])
      console.log({safeTxHash})
      const safeTx = await safe.loadSafeTransaction(safeTxHash)
      console.log({safeTx})
    } catch (e) {
      console.error(e)
    }
    setSubmitting(false)
  }, [safe])

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={state.activeStep} orientation="vertical">
            <Step key={'0'}>
              <StepLabel>Select Pool</StepLabel>
              <StepContent>
                <div>
                  <Button 
                    size = "md" 
                    color = "secondary"
                    onClick = {() => setState({ ...state, activeStep: 1 })}
                  >
                    Select
                  </Button>
                </div>
              </StepContent>
            </Step>
            <Step key={'1'}>
              <StepLabel>Invest or Withdraw</StepLabel>
              <StepContent>
                <div>
                  <div>
                    <Button 
                      size = "md" 
                      color = "secondary"
                      onClick = {() => setState({ ...state, activeStep: 0 })}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
        </Stepper>
      </ThemeProvider>
      
      {submitting ? 
      <>
        <Loader size="md" /><br/>
        <Button size="lg" color="secondary" onClick={() => {setSubmitting(false)}}>Cancel</Button>
      </>
      : 
      <Button size="lg" color="primary" onClick={submitTx}>Submit</Button>
      }
    </Container>
  )
};

export default StepperContainer;
