import { useContext } from 'react'

import { getAbi } from 'services/utils/fn'
import ERC20 from 'contracts/ERC20.json'
import DHedge from 'contracts/DHedge.json'
import DHedgeFactory from 'contracts/DHedgeFactory.json'
import { SYNTH_ADDRESS_MAP, OTHER_CONTRACTS } from 'config/const'
import { GlobalState } from 'GlobalState'

export const useContracts = () => {
    const [state] = useContext(GlobalState)
    const { web3, poolContractAddress } = state

    const contractSusd = new web3.eth.Contract(getAbi(ERC20), SYNTH_ADDRESS_MAP.mainnet.sUSD)
    const contractDhedge = new web3.eth.Contract(getAbi(DHedge), poolContractAddress)
    const contractFactory = new web3.eth.Contract(getAbi(DHedgeFactory), OTHER_CONTRACTS.mainnet.dHedgeFactory)

    return {
        contractSusd,
        contractDhedge,
        contractFactory
    }
}
