import { positiveNumberFormat } from 'utils/regex'

const getAbi: (abiJson: any) => any = abiJson => JSON.parse(JSON.stringify(abiJson)).abi;
const validNum: (value: string) => boolean = value => positiveNumberFormat.test(value)

export {
    getAbi,
    validNum
}