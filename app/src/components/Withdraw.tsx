import React, { useContext } from 'react'
import { Button } from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'

const Withdraw: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)
    return (
        <>
            <Button 
                size = "md" 
                color = "secondary"
                onClick = {() => setState({ ...state, activeStep: 0 })}
            >
                Cancel
            </Button>
        </>
    )
}

export default Withdraw;
