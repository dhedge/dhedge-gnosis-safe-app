import Web3 from 'web3';

export type StateInterface = {
    activeStep?: number,
    web3: Web3,
    poolContractAddress?: string
}
