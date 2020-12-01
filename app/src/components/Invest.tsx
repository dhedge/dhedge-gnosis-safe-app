import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Button, TextField, Select, Text } from "@gnosis.pm/safe-react-components"
import { useSafe } from '@rmeissner/safe-apps-react-sdk'
import { GlobalState } from 'GlobalState'
import { positiveNumberFormat } from 'utils/regex'
import { getAbi } from 'utils/fn'
import ERC20 from 'contracts/ERC20.json';
import { SYNTH_ADDRESS } from 'utils/const'

const items = [
    { id: '1', label: 'sUSD' }
];

const Invest: React.FC = () => {
    const safe = useSafe()  
    const [state, setState] = useContext(GlobalState)
    const { web3 } = state
    const [amount, setAmount] = useState('')
    const [balance, setBalance] = useState('0')
    const [activeItemId, setActiveItemId] = useState('1')
    const handleSetId = (id: string) => setActiveItemId(id)
    const validNum: (value: string) => boolean = value => positiveNumberFormat.test(value)
    const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (validNum(e.target.value)) {
            if (parseFloat(e.target.value) <= parseFloat(balance)) {
                setAmount(e.target.value)
            } else if (e.target.value === '') {
                setAmount('')
            } else {
                setAmount(balance)
            }
        }
    }
    const handleCancel = () => setState({ ...state, activeStep: 0 })
    const onSubmit = () => {
        return
    }

    const getSUSDBalance = useCallback(async () => {
        const contractSusd = new web3.eth.Contract(getAbi(ERC20), SYNTH_ADDRESS.mainnet.SUSD)
        const susdBalance = await contractSusd.methods.balanceOf(safe.info.safeAddress).call()
        setBalance(web3.utils.fromWei(susdBalance));
    }, [safe, web3])

    const setAmountBalance = () => setAmount(balance);

    useEffect(() => {
        getSUSDBalance()
    }, [getSUSDBalance])

    return (
        <>
        <div className = "flex-row flex-end mg-b-smaller">
            <button onClick={setAmountBalance} className="button-link">
                <Text size="sm">{`Balance: ${balance}`}</Text>
            </button>
        </div>
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
                    Approve and Invest
                </Button>
            </div>
        </form>
        </>
    )
}

export default Invest;
