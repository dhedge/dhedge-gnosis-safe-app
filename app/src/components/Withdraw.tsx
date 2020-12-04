import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Button, TextField, Select, Text } from '@gnosis.pm/safe-react-components'
import { useSafe } from '@rmeissner/safe-apps-react-sdk'
import { GlobalState } from 'GlobalState'
import { validNum } from 'utils/fn'
import { useContracts } from 'hooks/useContracts'
import { Transaction } from 'types/state.types'

const items = [
    { id: '1', label: 'Pool' }
];

const Withdraw: React.FC = () => {
    const safe = useSafe()
    const [state, setState] = useContext(GlobalState)
    const { web3, poolContractAddress, appsSdk } = state
    const [amount, setAmount] = useState('')
    const [activeItemId, setActiveItemId] = useState('1')
    const [balance, setBalance] = useState('0')
    const { contractDhedge } = useContracts()

    const handleCancel = () => setState({ ...state, activeStep: 0 })
    const setAmountBalance = () => setAmount(balance);
    const handleSetId = (id: string) => setActiveItemId(id)

    const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (validNum(e.target.value)) {
            if (parseFloat(e.target.value) <= parseFloat(balance)) {
                setAmount(e.target.value)
            } else if (e.target.value === '') {
                setAmount('')
            } else {
                setAmountBalance()
            }
        }
    }

    const onSubmit = async () => {
        const txs: Transaction[] = [{
            to: poolContractAddress || '',
            value: '0',
            data: contractDhedge.methods.withdraw(
                web3.utils.toWei(amount)
            ).encodeABI(),
        }]
        appsSdk.sendTransactions(txs);
    }

    const getBalance = useCallback(async () => {
        const poolBalance = await contractDhedge.methods.balanceOf(safe.info.safeAddress).call()
        setBalance(web3.utils.fromWei(poolBalance));
    }, [safe, web3, contractDhedge])

    useEffect(() => {
        getBalance()
    }, [getBalance])

    return (
        <>
            <div className = "flex-row flex-end mg-b-smaller">
                <button  type="button" onClick={setAmountBalance} className="button-link">
                    <Text size="sm">{`Balance: ${balance}`}</Text>
                </button>
            </div>
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
                    onClick = {onSubmit}
                    disabled = {amount === '' || amount === '0'}
                >
                    Withdraw
                </Button>
            </div>
        </>
    )
}

export default Withdraw;
