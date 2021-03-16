import React, { useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { GlobalState } from 'GlobalState';
import { SelectFund, SelectedFund } from 'components/manager';

const ManagerContainer: React.FC = () => {
  const [state] = useContext(GlobalState)

  return (
    <Stepper activeStep={state.activeStep} orientation="vertical">
        <Step key={'0'}>
          <StepLabel>Select Pool</StepLabel>
          <StepContent>
            <SelectFund />
          </StepContent>
        </Step>
        <Step key={'1'}>
          <StepLabel>Manage Pool</StepLabel>
          <StepContent>
            <SelectedFund />
          </StepContent>
        </Step>
    </Stepper>
  )
};

export default ManagerContainer;
