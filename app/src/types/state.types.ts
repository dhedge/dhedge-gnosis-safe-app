import Web3 from 'web3';
import initSdk from '@gnosis.pm/safe-apps-sdk';

const SdkInstance = initSdk()

export type StateInterface = {
    activeStep?: number,
    web3: Web3,
    poolContractAddress?: string,
    appsSdk: typeof SdkInstance
}

export interface Transaction {
    to: string;
    value: string;
    data: string;
}
