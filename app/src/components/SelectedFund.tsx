import React, { useContext, useState } from 'react'
import { Button, Tab } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const SelectedFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    const [selected, setSelected] = useState('1');
    return (
        <div>
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
        </div>
    )
}

export default SelectedFund;
