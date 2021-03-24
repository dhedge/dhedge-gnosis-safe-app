import { EthereumNetwork } from "./eth.types";

export type SynthName =
  | "sUSD"
  | "sGBP"
  | "sEUR"
  | "sJPY"
  | "sCHF"
  | "sETH"
  | "sBTC"
  | "sDEFI"
  | "sCEX"
  | "sBNB"
  | "sLINK"
  | "sEOS"
  | "sTRX"
  | "sXRP"
  | "sXMR"
  | "sLTC"
  | "sXTZ"
  | "sADA"
  | "sDASH"
  | "sETC"
  | "sAAVE"
  | "sCOMP"
  | "sDOT"
  | "sREN"
  | "sUNI"
  | "sYFI"
  | "iETH"
  | "iBTC"
  | "iDEFI"
  | "iCEX"
  | "iBNB"
  | "iLINK"
  | "iEOS"
  | "iTRX"
  | "iXRP"
  | "iXMR"
  | "iLTC"
  | "iXTZ"
  | "iADA"
  | "iDASH"
  | "iETC"
  | "iAAVE"
  | "iCOMP"
  | "iDOT"
  | "iREN"
  | "iUNI"
  | "iYFI"
  | "sXAG"
  | "sXAU"
  | "sOIL"
  | "iOIL";

export type SynthType = "currency" | "crypto" | "cryptoInverse" | "commodities" | "commoditiesInverse" | "equities";

export type Synths = {
  [key in SynthName]: {
    type: SynthType;
    description: string;
    displayName: string;
    link: string;
  };
};

export type SynthsAddresses = {
  [key in SynthName]: string;
};

export type SynthsAddressesMap = {
  mainnet: SynthsAddresses;
};
