import React, { useContext } from 'react'
import { Button } from "@gnosis.pm/safe-react-components"

import { GlobalState } from 'GlobalState'
import { PoolSelectionInput } from "components/forms"
import { DividerWithText } from "components/ui"

const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)

    const confirmSelection = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,contractAddress: string) => {
        e.preventDefault();
        setState({ ...state, activeStep: 1, poolContractAddress: contractAddress });
    }

    return (
        <div className = "padding-16">
            <PoolSelectionInput confirmSelection={confirmSelection} />
            <DividerWithText children="Or" />
            <Button
                size = "md"
                color = "primary"
            >
                Create a New Pool
            </Button>
        </div>
    )
}

export default SelectFund;
