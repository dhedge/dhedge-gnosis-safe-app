import { FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styled from "styled-components";

import InvestorContainer from './InvestorContainer';

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
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <InvestorContainer />
      </Container>
    </ThemeProvider>
  )
};

export default StepperContainer;
