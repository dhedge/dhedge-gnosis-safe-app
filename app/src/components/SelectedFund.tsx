import React, { useState } from 'react'
import { Tab, Title, Text } from "@gnosis.pm/safe-react-components"
import Invest from './Invest'
import Withdraw from './Withdraw'

const SelectedFund: React.FC = () => {
    const [selected, setSelected] = useState('1');
    const poolTitle = "Convex Strategies Pool"
    const percent = 34
    return (
        <>
            <div className = "row-title">
                <div className="mg-r-small">
                    <Title size="md">{poolTitle}</Title>
                </div>
                <Text size="xl" color= { percent < 0 ? "error" : 'primary'} >
                    {`${percent}%`}
                </Text>
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
        </>
    )
}

export default SelectedFund;
