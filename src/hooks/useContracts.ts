import { useContext } from 'react'
import { getAbi } from 'utils/fn'
import ERC20 from 'contracts/ERC20.json'
import DHedge from 'contracts/DHedge.json'
import { SYNTH_ADDRESS_MAP } from 'utils/const'
import { GlobalState } from 'GlobalState'

const useContracts = () => {
    const [state] = useContext(GlobalState)
    const { web3, poolContractAddress } = state
    const contractSusd = new web3.eth.Contract(getAbi(ERC20), SYNTH_ADDRESS_MAP.mainnet.sUSD)
    const contractDhedge = new web3.eth.Contract(getAbi(DHedge), poolContractAddress)
    return {
        contractSusd,
        contractDhedge
    }
}

export {
    useContracts
}
