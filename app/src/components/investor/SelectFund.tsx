import React, { useContext } from 'react'

import { GlobalState } from 'GlobalState'
import { PoolSelectionInput } from "components/forms"

const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)

    const confirmSelection = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,contractAddress: string) => {
        e.preventDefault();
        setState({ ...state, activeStep: 1, poolContractAddress: contractAddress });
    }

    return (
        <div className = "padding-16">
            <PoolSelectionInput confirmSelection={confirmSelection} />
        </div>
    )
}

export default SelectFund;
