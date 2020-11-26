import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import { etherAddressFormat } from 'utils/regex'


const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)
    const [contractValue, setContractValue] = useState('');
    const [matches, setMatches] = useState(false);

    const confirmSelection = () => setState({ ...state, activeStep: 1 });
    const updateTextField = (e: React.ChangeEvent<HTMLInputElement>) => setContractValue(e.target.value)

    useEffect(() => {
        if (etherAddressFormat.test(contractValue)) {
            setMatches(true)
        } else {
            setMatches(false)
        }
    }, [contractValue])

    return (
        <>
            <TextField
                    id="standard-amount"
                    label="Pool Contract Address"
                    value={contractValue}
                    onChange={updateTextField}
                />
            <div className="confirm-button-container">
                <Button
                    size = "md"
                    color = "primary"
                    onClick = {confirmSelection}
                    disabled = {!etherAddressFormat.test(contractValue)}
                >
                    Select
                </Button>
            </div>
            {matches ? 'true' : 'false'}
        </>
    )
}

export default SelectFund;
