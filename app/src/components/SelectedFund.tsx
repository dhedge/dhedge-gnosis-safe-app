import React, { useContext, useState } from 'react'
import { Button, Tab, Title, Text } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import styled from "styled-components";
import Invest from './Invest'
import Withdraw from './Withdraw'

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const SelectedFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    const [selected, setSelected] = useState('1');
    const poolTitle = "Convex Strategies Pool"
    const percent = 34
    return (
        <Container>
            <div className = "row-title">
                <div className="mg-r-small">
                    <Title size="md">{poolTitle}</Title>
                </div>
                <Text size="xl" color= { percent < 0 ? "error" : 'primary'} >
                    {`${percent}%`}
                </Text>
                
            </div>
            
            <Tab
                onChange={setSelected}
                selectedTab={selected}
                variant="outlined"
                items={[
                    { id: '1', label: 'Invest'},
                    { id: '2', label: 'Withdraw'}
                ]}
            />
            { selected === '1' ? <Invest /> : <Withdraw /> }
            
        </ Container>
    )
}

export default SelectedFund;
