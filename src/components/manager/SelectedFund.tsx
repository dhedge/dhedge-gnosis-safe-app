import React, { useContext } from 'react'
import { GlobalState } from 'GlobalState'
import CreatePool from "./CreatePool"
import ManagePool from "./ManagePool"

const SelectedFund: React.FC = () => {
    const [state] = useContext(GlobalState)
    const { createPool } = state

    if (createPool) return <CreatePool />;
    return <ManagePool />
}

export default SelectedFund;
