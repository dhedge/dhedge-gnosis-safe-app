import React, { useContext, useState } from 'react'
import { Button, Tab, Title, Text } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const SelectedFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    const [selected, setSelected] = useState('1');
    const poolTitle = "Convex Strategies Pool"
    const percent = 34
    return (
        <>
            <div className = "row-title">
                <Title size="md">{poolTitle}</Title>
                <div className="pd-l-small">
                    <Text size="xl" color= { percent < 0 ? "error" : 'primary'} >
                        {`${percent}%`}
                    </Text>
                </div>
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
            { selected }
            <Button 
                size = "md" 
                color = "secondary"
                onClick = {() => setState({ ...state, activeStep: 0 })}
            >
                Cancel
            </Button>
        </>
    )
}

export default SelectedFund;
