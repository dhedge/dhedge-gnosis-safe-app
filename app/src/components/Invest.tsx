import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Button, TextField, Select, Text } from "@gnosis.pm/safe-react-components"
import { useSafe } from '@rmeissner/safe-apps-react-sdk'
import { Transaction } from 'types/state.types'
import { GlobalState } from 'GlobalState'
import { SYNTH_ADDRESS } from 'utils/const'
import { validNum } from 'utils/fn'
import { useContracts } from 'hooks/useContracts'

const items = [
    { id: '1', label: 'sUSD' }
];

const Invest: React.FC = () => {
    const safe = useSafe()
    const [state, setState] = useContext(GlobalState)
    const { web3, poolContractAddress, appsSdk } = state
    const [amount, setAmount] = useState('')
    const [balance, setBalance] = useState('0')
    const [activeItemId, setActiveItemId] = useState('1')
    const { contractSusd, contractDhedge } = useContracts()

    const handleSetId = (id: string) => setActiveItemId(id)
    const handleCancel = () => setState({ ...state, activeStep: 0 })
    const setAmountBalance = () => setAmount(balance);

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

    const getBalance = useCallback(async () => {
        const susdBalance = await contractSusd.methods.balanceOf(safe.info.safeAddress).call()
        setBalance(web3.utils.fromWei(susdBalance));
    }, [safe, web3, contractSusd])

    const onSubmit = async () => {
        const txs: Transaction[] = [{
            to: SYNTH_ADDRESS.mainnet.SUSD || '',
            value: '0',
            data: contractSusd.methods.approve(
                poolContractAddress,
                web3.utils.toWei(amount)
            ).encodeABI(),
        },
        {
            to: poolContractAddress || '',
            value: '0',
            data: contractDhedge.methods.deposit(
                web3.utils.toWei(amount)
            ).encodeABI(),
        }]
        appsSdk.sendTransactions(txs);
    }

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
                    Approve and Invest
                </Button>
            </div>
        </>
    )
}

export default Invest;
