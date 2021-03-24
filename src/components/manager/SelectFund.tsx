import React, { useContext } from 'react'
import { Button, Title, Text } from "@gnosis.pm/safe-react-components"

import { GlobalState } from 'GlobalState'
import { PoolSelectionInput } from "components/forms"
import { DividerWithText } from "components/ui"

const SelectFund: React.FC = () => {
    const [state, setState] = useContext(GlobalState)

    const handleCreatePool = () => {
        setState({ ...state, activeStep: 1, createPool: true });
    }

    return (
        <div className = "padding-16">
            <Title size="sm">Manage Existing Pool</Title>
            <Text size="lg">Coming soon...</Text>
            <DividerWithText label="Or" />
            <Button size = "md" color = "primary" onClick={handleCreatePool}>
                Create a New Pool
            </Button>
        </div>
    )
}

export default SelectFund;
