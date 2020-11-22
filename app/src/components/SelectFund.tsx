import React, { useContext } from 'react'
import { Button } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const SelectFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)

    return (
        <div>
            <Button 
                size = "md" 
                color = "secondary"
                onClick = {() => setState({ ...state, activeStep: 1 })}
            >
                Select
            </Button>
        </div>
    )
}

export default SelectFund;
