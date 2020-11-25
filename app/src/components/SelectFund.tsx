import React, { useContext, useState } from 'react'
import { Button, TextField, Title } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

interface Row {
    pool: string;
    totalReturn: string;
    fees: string;
}

const createRow: (pool: string, totalReturn: string, fees: string) => Row = (pool, totalReturn, fees) => {
    return { pool, totalReturn, fees }
}

const SelectFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    const [contract, setContract] = useState('');

    return (
        <>
            <Title size="md">Enter pool contract</Title>
            <TextField
                    id="standard-amount"
                    label="Pool Contract Address"
                    value={contract}
                    onChange={(e) => setContract(e.target.value)}
                />
            <div className="confirm-button-container">
                <Button 
                    size = "md" 
                    color = "primary"
                    onClick = {() => setState({ ...state, activeStep: 1 })}
                >
                    Select
                </Button>
            </div>
        </>
    )
}

export default SelectFund;
