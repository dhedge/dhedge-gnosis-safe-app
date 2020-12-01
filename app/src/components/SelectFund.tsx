import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Button, TextField, Title, Text } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import { etherAddressFormat } from 'utils/regex'
import { getAbi } from 'utils/fn'
import DHedge from 'contracts/DHedge.json'

const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)
    const [contractAddress, setContractAddress] = useState('');
    const [poolName, setPoolName] = useState('');
    const [poolManager, setPoolManager] = useState('');
    const { web3 } = state;

    const confirmSelection = () => setState({ ...state, activeStep: 1, poolContractAddress: contractAddress });
    const updateTextField = (e: React.ChangeEvent<HTMLInputElement>) => setContractAddress(e.target.value)

    const getNames = useCallback(async () => {
        try {
            const contract = new web3.eth.Contract(getAbi(DHedge), contractAddress);
            const name = await contract.methods.name().call();
            const managerName = await contract.methods.managerName().call();
            setPoolName(name);
            setPoolManager(managerName);
        } catch (err) {
            resetValues();
        }
    }, [web3, contractAddress]);

    const resetValues = () => {
        setPoolName('');
        setPoolManager('');
    }

    useEffect(() => {
        if (web3.utils.isAddress(contractAddress)) {
            getNames()
        } else {
            resetValues()
        }
    }, [contractAddress, getNames, web3]);

    return (
        <>
            {poolName && (
                <div className="mg-b-small">
                    <Title size="sm">{poolName}</Title>
                    <Text size="lg">{`Managed by ${poolManager}`}</Text>

                </div>
            )}
            <TextField
                    id="standard-amount"
                    label="Pool Contract Address"
                    value={contractAddress}
                    onChange={updateTextField}
                />
            <div className="confirm-button-container">
                <Button
                    size = "md"
                    color = "primary"
                    onClick = {confirmSelection}
                    disabled = {!(etherAddressFormat.test(contractAddress) && poolName)}
                >
                    Select
                </Button>
            </div>
        </>
    )
}

export default SelectFund;
