import { FC, useState, useCallback, useContext, useEffect } from 'react'
import { Tab, Title, Text } from '@gnosis.pm/safe-react-components'
import { GlobalState } from 'GlobalState'
import Invest from './Invest'
import Withdraw from './Withdraw'
import { getAbi } from 'services/utils/fn'
import DHedge from 'contracts/DHedge.json'

const SelectedFund: FC = () => {
    const [state] = useContext(GlobalState)
    const { web3, poolContractAddress } = state
    const [selected, setSelected] = useState('1');
    const [poolName, setPoolName] = useState('')
    const [poolManager, setPoolManager] = useState('');

    const getNames = useCallback(async () => {
        try {
            const contract = new web3.eth.Contract(getAbi(DHedge), poolContractAddress);
            const name = await contract.methods.name().call();
            const managerName = await contract.methods.managerName().call();
            setPoolName(name);
            setPoolManager(managerName);
        } catch (err) {
            resetValues();
        }
    }, [web3, poolContractAddress]);

    const resetValues = () => {
        setPoolName('');
        setPoolManager('');
    }

    useEffect(() => {
        getNames()
    }, [getNames])

    return (
        <div className = "padding-16">
            <div className="mg-b-small">
                <div className = "row-title">
                    <div className="mg-r-small">
                        <Title size="md">{poolName}</Title>
                    </div>
                </div>
                <Text size='lg'>{`Managed by ${poolManager}`}</Text>
            </div>
            <div className = "mg-b-small">
                <Tab
                    onChange={setSelected}
                    selectedTab={selected}
                    variant="outlined"
                    items={[
                        { id: '1', label: 'Invest'},
                        { id: '2', label: 'Withdraw'}
                    ]}
                />
            </div>
            { selected === '1' ? <Invest /> : <Withdraw /> }
        </div>
    )
}

export default SelectedFund;
