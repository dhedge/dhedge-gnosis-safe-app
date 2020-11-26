import React, { useContext, useState } from 'react'
import { Button, TextField, Select } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const items = [
    { id: '1', label: 'sUSD' }
];

const Invest: React.FC = () => {
    const [state, setState] = useContext(GlobalState)
    const [amount, setAmount] = useState('')
    const [activeItemId, setActiveItemId] = useState('1')
    const onSubmit = () => {
        return
    }
    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className = "flex-row">
                <div className="mg-r-small select-width">
                    <Select
                        items={items}
                        activeItemId={activeItemId}
                        onItemClick={(id) => {
                            setActiveItemId(id);
                        }}
                    />
                </div>
                <TextField
                    id="standard-amount"
                    label="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="confirm-button-container">
                <div className="mg-r-small">
                    <Button
                        size = "md"
                        color = "secondary"
                        onClick = {() => setState({ ...state, activeStep: 0 })}
                    >
                        Cancel
                    </Button>
                </div>
                <Button
                    size = "md"
                    color = "primary"
                    onClick = {() => setState({ ...state, activeStep: 0 })}
                >
                    Invest
                </Button>
            </div>
        </form>
    )
}

export default Invest;
