import React, { useContext, useState } from 'react'
import { Button, TextField, Select } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import { positiveNumberFormat } from 'utils/regex'

const items = [
    { id: '1', label: 'Pool' }
];

const Withdraw: React.FC = () => {
    const [state, setState] = useContext(GlobalState)
    const [amount, setAmount] = useState('')
    const [activeItemId, setActiveItemId] = useState('1')

    const handleCancel = () => setState({ ...state, activeStep: 0 })
    const handleSetId = (id: string) => setActiveItemId(id)
    const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (positiveNumberFormat.test(e.target.value)) {
            setAmount(e.target.value)
        }
    }

    const onSubmit = () => {
        return
    }
    return (
        <form noValidate={true} autoComplete="off" onSubmit={onSubmit}>
            <div className = "flex-row">
                <div className="mg-r-small select-width">
                    <Select
                        items={items}
                        activeItemId={activeItemId}
                        onItemClick={handleSetId}
                    />
                </div>
                <TextField
                    id="standard-amount"
                    label="Amount"
                    value={amount}
                    onChange={handleSetAmount}
                />
            </div>
            <div className="confirm-button-container">
                <div className="mg-r-small">
                    <Button
                        size = "md"
                        color = "secondary"
                        onClick = {handleCancel}
                    >
                        Cancel
                    </Button>
                </div>
                <Button
                    size = "md"
                    color = "primary"
                    onClick = {handleCancel}
                    disabled = {amount === '' || amount === '0'}
                >
                    Withdraw
                </Button>
            </div>
        </form>
    )
}

export default Withdraw;
