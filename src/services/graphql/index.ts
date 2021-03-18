import { GraphQLClient } from "graphql-request"

import { getFactoryData } from "./getFactoryData"
import config from "config"

const client = new GraphQLClient(config.dHedgeGraphQL)

export default client

export {
  getFactoryData
}
