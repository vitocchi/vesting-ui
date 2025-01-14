import { VESTING_WALLET_ABI } from '../contracts/VestingWallet'
import { Chain, createPublicClient, http, PublicClient } from 'viem'
import { sepolia, mainnet, polygon, polygonAmoy } from 'viem/chains'
import { TokenAmount } from './TokenAmount'
import dayjs, { Dayjs } from 'dayjs'
import { Alchemy, Network } from 'alchemy-sdk'
import { TokenDetailsProps } from '@/components/VestingInfo/TokenInfo/TokenDetails'
import { SupportedNetwork } from '@/lib/Network'

function getAlchemyNetwork(network: SupportedNetwork): Network {
  switch (network) {
    case 'Ethereum': return Network.ETH_MAINNET
    case 'Polygon': return Network.MATIC_MAINNET
    case 'Sepolia': return Network.ETH_SEPOLIA
    case 'Amoy': return Network.MATIC_AMOY
    default: throw new Error('Invalid network')
  }
}

function getViemChain(network: SupportedNetwork): Chain {
  switch (network) {
    case 'Ethereum': return mainnet
    case 'Polygon': return polygon
    case 'Sepolia': return sepolia
    case 'Amoy': return polygonAmoy
    default: throw new Error('Invalid network')
  }
}

export class VestingWalletClient {
  private client: PublicClient
  private alchemy: Alchemy
  constructor(private readonly walletAddress: `0x${string}`, private readonly network: SupportedNetwork) {
    const config = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: getAlchemyNetwork(network),
      connectionInfoOverrides: {
        skipFetchSetup: true,
      },
    }
    this.alchemy = new Alchemy(config)
    console.log('alchemy.config.url', this.alchemy.config.url)
    this.client = createPublicClient({
      chain: getViemChain(network),
      transport: http(this.alchemy.config.url)
    })
  }

  async getBeneficiary(): Promise<`0x${string}`> {
    return await this.client.readContract({
      address: this.walletAddress as `0x${string}`,
      abi: VESTING_WALLET_ABI,
      functionName: 'beneficiary',
      args: []
    })
  }



  async getTokenVestings(): Promise<TokenDetailsProps[]> {


    const balances = await this.alchemy.core.getTokenBalances(this.walletAddress)

    // トークンの詳細情報を取得
    const tokensDetails = await Promise.all(
      balances.tokenBalances.map(async token => {
        const metadata = await this.alchemy.core.getTokenMetadata(token.contractAddress)
        return {
          symbol: metadata.symbol || 'UNKNOWN',
          currentBalance: convertToUnits(BigInt(token.tokenBalance || '0'), metadata.decimals || 18),
          claimed: convertToUnits(await this.getClaimedAmount(token.contractAddress as `0x${string}`), metadata.decimals || 18),
          claimable: convertToUnits(await this.getClaimableAmount(token.contractAddress as `0x${string}`), metadata.decimals || 18),
          currentDate: dayjs().toDate(),
          vestingDurationSeconds: Number(await this.getDuration()),
          startAt: dayjs.unix(Number(await this.getStartAt())).toDate(),
        }
      })
    )

    return tokensDetails.filter(token => token.currentBalance > 0)
  }

  private async getClaimedAmount(tokenAddress: `0x${string}`): Promise<bigint> {
    return await this.client.readContract({
      address: this.walletAddress as `0x${string}`,
      abi: VESTING_WALLET_ABI,
      functionName: 'released',
      args: [tokenAddress]
    })
  }

  private async getClaimableAmount(tokenAddress: `0x${string}`): Promise<bigint> {
    return await this.client.readContract({
      address: this.walletAddress as `0x${string}`,
      abi: VESTING_WALLET_ABI,
      functionName: 'releasable',
      args: [tokenAddress]
    })
  }

  private async getStartAt(): Promise<bigint> {
    return await this.client.readContract({
      address: this.walletAddress as `0x${string}`,
      abi: VESTING_WALLET_ABI,
      functionName: 'start',
      args: []
    })
  }

  private async getDuration(): Promise<bigint> {
    return await this.client.readContract({
      address: this.walletAddress as `0x${string}`,
      abi: VESTING_WALLET_ABI,
      functionName: 'duration',
      args: []
    })
  }
}

function convertToUnits(value: bigint, decimals: number): number {
  return Number(value / BigInt(10 ** decimals))
}