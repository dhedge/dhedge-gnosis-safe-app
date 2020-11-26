export const getAbi: (abiJson: any) => any = abiJson => JSON.parse(JSON.stringify(abiJson)).abi;
