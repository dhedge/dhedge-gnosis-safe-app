import { FC, useContext, useState, useEffect, useCallback } from 'react'
import { Button, TextField, Title, Text } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import { getAbi } from 'services/utils/fn'
import DHedge from 'contracts/DHedge.json'

interface IProps {
    confirmSelection: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, contractAddress: string) => void;
}

const PoolSelectionInput: FC<IProps> = (props) => {
    const [state] = useContext(GlobalState)
    const [contractAddress, setContractAddress] = useState('');
    const [poolName, setPoolName] = useState('');
    const [poolManager, setPoolManager] = useState('');
    const { web3 } = state;

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
                    onClick = {e => props.confirmSelection(e, contractAddress)}
                    disabled = {!(web3.utils.isAddress(contractAddress) && poolName)}
                >
                    Select
                </Button>
            </div>
        </>
    )
}

export default PoolSelectionInput;
