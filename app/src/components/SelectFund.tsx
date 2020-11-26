import React, { useContext, useState } from 'react'
import { Button, TextField } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

interface Row {
    pool: string;
    totalReturn: string;
    fees: string;
}

const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)
    const [contract, setContract] = useState('');

    return (
        <>
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
