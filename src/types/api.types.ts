import { EthereumNetwork } from "./eth.types";

export interface FactoryData {
  network: EthereumNetwork;
  address: string;
  managerFeeDenominator: string;
  exitFeeNumerator: string;
  exitFeeDenominator: string;
  timeUntilCoolDown: number;
}

export interface FactoryResponse {
  factory: FactoryData;
}
