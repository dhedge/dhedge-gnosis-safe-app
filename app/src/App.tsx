import React, { useCallback, useState, useContext } from 'react';
import styled from "styled-components";
import { Button, Loader, Title } from "@gnosis.pm/safe-react-components";
import { useSafe } from '@rmeissner/safe-apps-react-sdk';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { GlobalState } from 'GlobalState'

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const App: React.FC = () => {
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
  const steps = [{
    id: '1',
    label: 'Select Pool'
  }]
  return (
    <Container>
      <Title size="md">{safe.info.safeAddress}</Title>
      <Stepper activeStep={state.activeStep} orientation="vertical">
          <Step key={'0'}>
            <StepLabel>Select Pool</StepLabel>
            <StepContent>
              <div>
                <div>
                  <Button size = "md" color = "secondary">
                    Back
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
      </Stepper>
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

export default App;
