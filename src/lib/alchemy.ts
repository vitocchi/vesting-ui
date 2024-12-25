import { Alchemy, Network } from 'alchemy-sdk'
import { TokenAmount } from './TokenAmount'

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

export type Token = {
  contractAddress: string
  symbol: string
  balance: TokenAmount
  claimedAmount: TokenAmount
}

export async function getTokens(address: string): Promise<Token[]> {

  const balances = await alchemy.core.getTokenBalances(address)

  // トークンの詳細情報を取得
  const tokensData = await Promise.all(
    balances.tokenBalances.map(async token => {
      const metadata = await alchemy.core.getTokenMetadata(token.contractAddress)
      return {
        contractAddress: token.contractAddress,
        symbol: metadata.symbol || 'UNKNOWN',
        balance: new TokenAmount(BigInt(token.tokenBalance || '0'), metadata.decimals || 18),
      }
    })
  )

  return tokensData
} 