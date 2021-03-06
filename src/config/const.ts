import { SynthName, Synths, SynthsAddressesMap } from "types/synths.types";


const SYNTH_ADDRESS_MAP: SynthsAddressesMap = Object.freeze({
  mainnet: {
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    sGBP: "0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F",
    sEUR: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
    sJPY: "0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d",
    sCHF: "0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d",
    sETH: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
    sBTC: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
    sDEFI: "0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B",
    sCEX: "0xeABACD844A196D7Faf3CE596edeBF9900341B420",
    sBNB: "0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848",
    sLINK: "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6",
    sEOS: "0x88C8Cf3A212c0369698D13FE98Fcb76620389841",
    sTRX: "0xf2E08356588EC5cd9E437552Da87C0076b4970B0",
    sXRP: "0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c",
    sXMR: "0x5299d6F7472DCc137D7f3C4BcfBBB514BaBF341A",
    sLTC: "0xC14103C2141E842e228FBaC594579e798616ce7A",
    sXTZ: "0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd",
    sADA: "0xe36E2D3c7c34281FA3bC737950a68571736880A1",
    sDASH: "0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6",
    sETC: "0x22602469d704BfFb0936c7A7cfcD18f7aA269375",
    sAAVE: "0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076",
    sCOMP: "0xEb029507d3e043DD6C87F2917C4E82B902c35618",
    sDOT: "0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6",
    sREN: "0xD31533E8d0f3DF62060e94B3F1318137bB6E3525",
    sUNI: "0x30635297E450b930f8693297eBa160D9e6c8eBcf",
    sYFI: "0x992058B7DB08F9734d84485bfbC243C4ee6954A7",
    iETH: "0xA9859874e1743A32409f75bB11549892138BBA1E",
    iBTC: "0xD6014EA05BDe904448B743833dDF07c3C7837481",
    iDEFI: "0x14d10003807AC60d07BB0ba82cAeaC8d2087c157",
    iCEX: "0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d",
    iBNB: "0xAFD870F32CE54EfdBF677466B612bf8ad164454B",
    iLINK: "0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01",
    iEOS: "0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4",
    iTRX: "0xC5807183a9661A533CB08CbC297594a0B864dc12",
    iXRP: "0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6",
    iXMR: "0x4AdF728E2Df4945082cDD6053869f51278fae196",
    iLTC: "0x79da1431150C9b82D2E5dfc1C68B33216846851e",
    iXTZ: "0x8deef89058090ac5655A99EEB451a4f9183D1678",
    iADA: "0x8A8079c7149B8A1611e5C5d978DCA3bE16545F83",
    iDASH: "0xCB98f42221b2C251A4E74A1609722eE09f0cc08E",
    iETC: "0xd50c1746D835d2770dDA3703B69187bFfeB14126",
    iAAVE: "0x176C674Ee533C6139B0dc8b458D72A93dCB3e705",
    iCOMP: "0x6345728B1ccE16E6f8C509950b5c84FFF88530d9",
    iDOT: "0x46a97629C9C1F58De6EC18C7F536e7E6d6A6ecDe",
    iREN: "0x0fEd38108bdb8e62ef7b5680E8E0726E2F29e0De",
    iUNI: "0x36A00FF9072570eF4B9292117850B8FE08d96cce",
    iYFI: "0x592244301CeA952d6daB2fdC1fE6bd9E53917306",
    sXAG: "0x6A22e5e94388464181578Aa7A6B869e00fE27846",
    sXAU: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
    sOIL: "0x6d16cF3EC5F763d4d99cB0B0b110eefD93B11B56",
    iOIL: "0xA5a5DF41883Cdc00c4cCC6E8097130535399d9a3",
  },
});

const OTHER_CONTRACTS = Object.freeze({
  mainnet: {
    dHedgeFactory: "0x03D20ef9bdc19736F5e8Baf92D02C8661a5941F7",
  }
})

const SYNTHS: Synths = Object.freeze({
  sUSD: {
    type: "currency",
    description: "US Dollar",
    displayName: "sUSD",
    link: "https://docs.synthetix.io/tokens/list/#us-dollars-susd",
  },
  sGBP: {
    type: "currency",
    description: "Pound Sterling",
    displayName: "GBP",
    link: "https://docs.synthetix.io/tokens/list/#pound-sterling-sgbp",
  },
  sEUR: {
    type: "currency",
    description: "Euros",
    displayName: "EUR",
    link: "https://docs.synthetix.io/tokens/list/#euros-seur",
  },
  sJPY: {
    type: "currency",
    description: "Japanese Yen",
    displayName: "JPY",
    link: "https://docs.synthetix.io/tokens/list/#japanese-yen-sjpy",
  },
  sCHF: {
    type: "currency",
    description: "Swiss Franc",
    displayName: "CHF",
    link: "https://docs.synthetix.io/tokens/list/#swiss-franc-schf",
  },
  sETH: {
    type: "crypto",
    description: "Ethereum",
    displayName: "ETH",
    link: "https://docs.synthetix.io/tokens/list/#ether-seth",
  },
  sBTC: {
    type: "crypto",
    description: "Bitcoin",
    displayName: "BTC",
    link: "https://docs.synthetix.io/tokens/list/#bitcoin-sbtc",
  },
  sDEFI: {
    type: "crypto",
    description: "DeFi Index",
    displayName: "DEFI",
    link: "https://docs.synthetix.io/tokens/list/#defi-index-sdefi",
  },
  sCEX: {
    type: "crypto",
    description: "Centralised Exchange Index",
    displayName: "CEX",
    link: "https://docs.synthetix.io/tokens/list/#centralised-exchange-index-scex",
  },
  sBNB: {
    type: "crypto",
    description: "Binance Coin",
    displayName: "BNB",
    link: "https://docs.synthetix.io/tokens/list/#binance-coin-sbnb",
  },
  sLINK: {
    type: "crypto",
    description: "Chainlink",
    displayName: "LINK",
    link: "https://docs.synthetix.io/tokens/list/#chainlink-slink",
  },
  sEOS: {
    type: "crypto",
    description: "EOS",
    displayName: "EOS",
    link: "https://docs.synthetix.io/tokens/list/#eos-seos",
  },
  sTRX: {
    type: "crypto",
    description: "TRON",
    displayName: "TRX",
    link: "https://docs.synthetix.io/tokens/list/#tron-strx",
  },
  sXRP: {
    type: "crypto",
    description: "Ripple",
    displayName: "XRP",
    link: "https://docs.synthetix.io/tokens/list/#ripple-sxrp",
  },
  sXMR: {
    type: "crypto",
    description: "Monero",
    displayName: "XMR",
    link: "https://docs.synthetix.io/tokens/list/#monero-sxmr",
  },
  sLTC: {
    type: "crypto",
    description: "Litecoin",
    displayName: "LTC",
    link: "https://docs.synthetix.io/tokens/list/#litecoin-sltc",
  },
  sXTZ: {
    type: "crypto",
    description: "Tezos",
    displayName: "XTZ",
    link: "https://docs.synthetix.io/tokens/list/#tezos-sxtz",
  },
  sADA: {
    type: "crypto",
    description: "Cardano",
    displayName: "ADA",
    link: "https://docs.synthetix.io/tokens/list/#cardano-sada",
  },
  sDASH: {
    type: "crypto",
    description: "Dash",
    displayName: "DASH",
    link: "https://docs.synthetix.io/tokens/list/#dash-sdash",
  },
  sETC: {
    type: "crypto",
    description: "Ethereum Classic",
    displayName: "ETC",
    link: "https://docs.synthetix.io/tokens/list/#ethereum-classic-setc",
  },
  sAAVE: {
    type: "crypto",
    description: "Aave",
    displayName: "AAVE",
    link: "https://docs.synthetix.io/tokens/list/#aave-saave",
  },
  sCOMP: {
    type: "crypto",
    description: "Compound",
    displayName: "COMP",
    link: "https://docs.synthetix.io/tokens/list/#compound-scomp",
  },
  sDOT: {
    type: "crypto",
    description: "Polkadot",
    displayName: "DOT",
    link: "https://docs.synthetix.io/tokens/list/#polkadot-sdot",
  },
  sREN: {
    type: "crypto",
    description: "Ren",
    displayName: "REN",
    link: "https://docs.synthetix.io/tokens/list/#ren-sren",
  },
  sUNI: {
    type: "crypto",
    description: "Uniswap",
    displayName: "UNI",
    link: "https://docs.synthetix.io/tokens/list/#uniswap-suni",
  },
  sYFI: {
    type: "crypto",
    description: "yearn.finance",
    displayName: "YFI",
    link: "https://docs.synthetix.io/tokens/list/#yearnfinance-syfi",
  },
  iETH: {
    type: "cryptoInverse",
    description: "Inverse Ethereum",
    displayName: "iETH",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ether-ieth",
  },
  iBTC: {
    type: "cryptoInverse",
    description: "Inverse Bitcoin",
    displayName: "iBTC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-bitcoin-ibtc",
  },
  iDEFI: {
    type: "cryptoInverse",
    description: "Inverse DeFi Index",
    displayName: "iDEFI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-defi-index-idefi",
  },
  iCEX: {
    type: "cryptoInverse",
    description: "Inverse Centralised Exchange Index",
    displayName: "iCEX",
    link: "https://docs.synthetix.io/tokens/list/#inverse-centralised-exchange-index-icex",
  },
  iBNB: {
    type: "cryptoInverse",
    description: "Inverse Binance Coin",
    displayName: "iBNB",
    link: "https://docs.synthetix.io/tokens/list/#inverse-binance-coin-ibnb",
  },
  iLINK: {
    type: "cryptoInverse",
    description: "Inverse Chainlink",
    displayName: "iLINK",
    link: "https://docs.synthetix.io/tokens/list/#inverse-chainlink-ilink",
  },
  iEOS: {
    type: "cryptoInverse",
    description: "Inverse EOS",
    displayName: "iEOS",
    link: "https://docs.synthetix.io/tokens/list/#inverse-eos-ieos",
  },
  iTRX: {
    type: "cryptoInverse",
    description: "Inverse TRON",
    displayName: "iTRX",
    link: "https://docs.synthetix.io/tokens/list/#inverse-tron-itrx",
  },
  iXRP: {
    type: "cryptoInverse",
    description: "Inverse Ripple",
    displayName: "iXRP",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ripple-ixrp",
  },
  iXMR: {
    type: "cryptoInverse",
    description: "Inverse Monero",
    displayName: "iXMR",
    link: "https://docs.synthetix.io/tokens/list/#inverse-monero-ixmr",
  },
  iLTC: {
    type: "cryptoInverse",
    description: "Inverse Litecoin",
    displayName: "iLTC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-litecoin-iltc",
  },
  iXTZ: {
    type: "cryptoInverse",
    description: "Inverse Tezos",
    displayName: "iXTZ",
    link: "https://docs.synthetix.io/tokens/list/#inverse-tezos-ixtz",
  },
  iADA: {
    type: "cryptoInverse",
    description: "Inverse Cardano",
    displayName: "iADA",
    link: "https://docs.synthetix.io/tokens/list/#inverse-cardano-iada",
  },
  iDASH: {
    type: "cryptoInverse",
    description: "Inverse Dash",
    displayName: "iDASH",
    link: "https://docs.synthetix.io/tokens/list/#inverse-dash-idash",
  },
  iETC: {
    type: "cryptoInverse",
    description: "Inverse Ethereum Classic",
    displayName: "iETC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ethereum-classic-ietc",
  },
  iAAVE: {
    type: "cryptoInverse",
    description: "Inverse Aave",
    displayName: "iAAVE",
    link: "https://docs.synthetix.io/tokens/list/#inverse-aave-iaave",
  },
  iCOMP: {
    type: "cryptoInverse",
    description: "Inverse Compound",
    displayName: "iCOMP",
    link: "https://docs.synthetix.io/tokens/list/#inverse-compound-icomp",
  },
  iDOT: {
    type: "cryptoInverse",
    description: "Inverse Polkadot",
    displayName: "iDOT",
    link: "https://docs.synthetix.io/tokens/list/#inverse-polkadot-idot",
  },
  iREN: {
    type: "cryptoInverse",
    description: "Inverse Ren",
    displayName: "iREN",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ren-iren",
  },
  iUNI: {
    type: "cryptoInverse",
    description: "Inverse Uniswap",
    displayName: "iUNI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-uniswap-iuni",
  },
  iYFI: {
    type: "cryptoInverse",
    description: "Inverse yearn.finance",
    displayName: "iYFI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-yearnfinance-iyfi",
  },
  sOIL: {
    type: "commodities",
    description: "Brent Crude Oil",
    displayName: "OIL",
    link: "https://docs.synthetix.io/tokens/list/#brent-crude-oil-soil",
  },
  sXAG: {
    type: "commodities",
    description: "Silver",
    displayName: "XAG",
    link: "https://docs.synthetix.io/tokens/list/#silver-ounce-sxag",
  },
  sXAU: {
    type: "commodities",
    description: "Gold",
    displayName: "XAU",
    link: "https://docs.synthetix.io/tokens/list/#gold-ounce-sxau",
  },
  iOIL: {
    type: "commoditiesInverse",
    description: "Inverse Brent Crude Oil",
    displayName: "iOIL",
    link: "https://docs.synthetix.io/tokens/list/#inverse-brent-crude-oil-ioil",
  },
});

const SYNTHS_SUSD_EXCLUDED = Object.keys(SYNTHS).filter((s) => s !== "sUSD") as Exclude<SynthName, "sUSD">[];

export {
  SYNTH_ADDRESS_MAP,
  SYNTHS,
  SYNTHS_SUSD_EXCLUDED,
  OTHER_CONTRACTS
}
