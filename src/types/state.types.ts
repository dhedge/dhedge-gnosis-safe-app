import Web3 from 'web3';

export type StateInterface = {
    activeStep?: number,
    web3: Web3,
    poolContractAddress?: string,
}

export interface Transaction {
    to: string;
    value: string;
    data: string;
}
