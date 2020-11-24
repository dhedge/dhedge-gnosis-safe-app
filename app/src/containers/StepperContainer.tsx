import React, { useContext } from 'react';
import styled from "styled-components";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GlobalState } from 'GlobalState'
import { SelectFund, SelectedFund } from 'components'

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
  const [state] = useContext(GlobalState)

  return (
      <ThemeProvider theme={theme}>
        <Stepper activeStep={state.activeStep} orientation="vertical">
            <Step key={'0'}>
              <StepLabel>Select Pool</StepLabel>
              <StepContent>
                <SelectFund />
              </StepContent>
            </Step>
            <Step key={'1'}>
              <StepLabel>Invest or Withdraw</StepLabel>
              <StepContent>
                <SelectedFund />
              </StepContent>
            </Step>
        </Stepper>
      </ThemeProvider>
  )
};

export default StepperContainer;
