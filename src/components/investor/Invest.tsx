import { FC, useContext, useState, useEffect, useCallback } from 'react'
import { TextField, Select, Text } from "@gnosis.pm/safe-react-components"
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'

import { Transaction } from 'types/state.types'
import { GlobalState } from 'GlobalState'
import { SYNTH_ADDRESS_MAP } from 'config/const'
import { validNum } from 'services/utils/fn'
import { useContracts } from 'hooks/useContracts'
import { ConfirmCancelButtons } from "components/forms"

const items = [
    { id: '1', label: 'sUSD' }
];

const Invest: FC = () => {
    const { safe, sdk } = useSafeAppsSDK();
    const [state, setState] = useContext(GlobalState)
    const { web3, poolContractAddress } = state
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
        const susdBalance = await contractSusd.methods.balanceOf(safe.safeAddress).call()
        setBalance(web3.utils.fromWei(susdBalance));
    }, [safe, web3, contractSusd])

    const onSubmit = async () => {
        try {
            const txs: Transaction[] = [{
                to: SYNTH_ADDRESS_MAP.mainnet.sUSD || '',
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
    
            await sdk.txs.send({ txs });
        } catch (err) {
            console.error(err.message);
        }
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
            <ConfirmCancelButtons 
                handleCancel={handleCancel} 
                handleConfirm={onSubmit} 
                confirmDisabled={amount === '' || amount === '0'} 
                confirmText="Approve and Invest" 
            />
        </>
    )
}

export default Invest;
