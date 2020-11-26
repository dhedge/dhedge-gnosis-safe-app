import Web3 from 'web3';
import { Contract } from "web3-eth-contract";

export type StateInterface = {
    activeStep?: number,
    web3?: Web3,
    sUSDContract?: Contract,
    poolContract?: Contract
}