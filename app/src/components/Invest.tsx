import React, { useContext, useState } from 'react'
import { Button, TextField } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const Invest: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    const [amount, setAmount] = useState('');
    const onSubmit = () => {}
    return (
        <>
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField
                id="standard-amount"
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <Button 
                size = "md" 
                color = "secondary"
                onClick = {() => setState({ ...state, activeStep: 0 })}
            >
                Cancel
            </Button>
            <Button 
                size = "md" 
                color = "primary"
                onClick = {() => setState({ ...state, activeStep: 0 })}
            >
                Invest
            </Button>
        </form>
            
        </>
    )
}

export default Invest;
