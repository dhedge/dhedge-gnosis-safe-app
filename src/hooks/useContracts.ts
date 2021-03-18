import { useContext, useState, useEffect } from 'react'

import { getAbi } from 'services/utils/fn'
import ERC20 from 'contracts/ERC20.json'
import DHedge from 'contracts/DHedge.json'
import DHedgeFactory from 'contracts/DHedgeFactory.json'
import { SYNTH_ADDRESS_MAP } from 'config/const'
import { GlobalState } from 'GlobalState'
import { getFactoryData } from "services/graphql"

export const useContracts = () => {
    const [state] = useContext(GlobalState)
    const { web3, poolContractAddress } = state
    const [factoryAddress, setFactoryAddress] = useState("")

    useEffect(() => {
        const getFactory = async () => {
            const { address } = await getFactoryData();
            setFactoryAddress(address)
        }
        getFactory()
    }, [])


    const contractSusd = new web3.eth.Contract(getAbi(ERC20), SYNTH_ADDRESS_MAP.mainnet.sUSD)
    const contractDhedge = new web3.eth.Contract(getAbi(DHedge), poolContractAddress)
    const contractFactory = new web3.eth.Contract(getAbi(DHedgeFactory), factoryAddress)

    return {
        contractSusd,
        contractDhedge,
        contractFactory
    }
}
