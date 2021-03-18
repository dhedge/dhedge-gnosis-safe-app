import { positiveNumberFormat } from 'services/utils/regex'

const getAbi: (abiJson: any) => any = abiJson => JSON.parse(JSON.stringify(abiJson)).abi

const validNum: (value: string) => boolean = value => positiveNumberFormat.test(value)

const zeros = (length: number): string => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
        zeros = zeros + "0";
    }
    return zeros;
}

const stringToHex = (str: string): string => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
  
    result = "0x" + result + zeros(64 - result.length);
    return result;
};

export {
    getAbi,
    validNum,
    stringToHex
}
