import { FC, useState, useContext } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Tab, Title } from '@gnosis.pm/safe-react-components'
import styled from "styled-components";

import { GlobalState } from 'GlobalState';
import InvestorContainer from './InvestorContainer';
import ManagerContainer from './ManagerContainer';

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
  max-width: 620px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const StepperContainer: FC = () => {
  const [selected, setSelected] = useState('1')
  const [state, setState] = useContext(GlobalState)

  const handleChange = (tab: string) => {
    setSelected(tab);
    setState({ ...state, activeStep: 0, poolContractAddress: "", createPool: false })
  } 

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className = "row-title space-between">
          <Title size="sm">dHEDGE</Title>
          <Tab
              onChange={handleChange}
              selectedTab={selected}
              variant="contained"
              items={[
                  { id: '1', label: 'Investor', icon: "assets" },
                  { id: '2', label: 'Manager', icon: "owners"}
              ]}
          />
        </div>
        { selected === '1' ? <InvestorContainer /> : <ManagerContainer /> }
      </Container>
    </ThemeProvider>
  )
};

export default StepperContainer;
