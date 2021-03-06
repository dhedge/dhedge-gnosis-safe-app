import { FC, useContext, useState, useCallback, useEffect } from 'react'
import { TextField, Select, Text } from '@gnosis.pm/safe-react-components'
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { GlobalState } from 'GlobalState'
import { validNum } from 'services/utils/fn'
import { useContracts } from 'hooks/useContracts'
import { Transaction } from 'types/state.types'
import { ConfirmCancelButtons } from "components/forms"

const items = [
    { id: '1', label: 'Pool' }
];

const Withdraw: FC = () => {
    const { safe, sdk } = useSafeAppsSDK()
    const [state, setState] = useContext(GlobalState)
    const { web3, poolContractAddress } = state
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
        try {
            const txs: Transaction[] = [{
                to: poolContractAddress || '',
                value: '0',
                data: contractDhedge.methods.withdraw(
                    web3.utils.toWei(amount)
                ).encodeABI(),
            }]
            await sdk.txs.send({ txs });
        } catch (err) {
            console.error(err.message);
        }
    }

    const getBalance = useCallback(async () => {
        const poolBalance = await contractDhedge.methods.balanceOf(safe.safeAddress).call()
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
            <ConfirmCancelButtons 
                handleCancel={handleCancel}
                handleConfirm={onSubmit}
                confirmText="Withdraw"
                confirmDisabled={amount === '' || amount === '0'}
            />
        </>
    )
}

export default Withdraw;
