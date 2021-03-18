import client from "./index"
import { FactoryData, FactoryResponse } from "types/api.types"

export const getFactoryData = async (): Promise<FactoryData> => {
  const query = `{
    factory {
      network
      address
      managerFeeDenominator
      exitFeeNumerator
      exitFeeDenominator
      timeUntilCoolDown
    }
  }`

  const response: FactoryResponse = await client.request(query)
  return response.factory
};
