import { VESTING_WALLET_ABI } from '../contracts/VestingWallet'
import { getTokens, Token } from './alchemy'
import { VestingSchedule } from './VestingSchedule'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

export type VestingWalletData = {
  vestingWalletAddress: string
  beneficiaryAddress: string
  schedule: VestingSchedule
  tokens: Token[]
}

async function getContractData(walletAddress: string, tokens: Token[]): Promise<{
  beneficiary: string
  startTime: number
  duration: number
  claimedAmounts: number[]
}> {
  const client = createPublicClient({
    chain: mainnet,
    transport: http()
  })
  const contract = {
    address: walletAddress as `0x${string}`,
    abi: VESTING_WALLET_ABI,
  }

  const [beneficiary, startTime, duration] = await Promise.all([
    client.readContract({
      ...contract,
      functionName: 'beneficiary',
    }),
    client.readContract({
      ...contract,
      functionName: 'start',
    }),
    client.readContract({
      ...contract,
      functionName: 'duration',
    })
  ])

  const claimedAmounts = await Promise.all(tokens.map(token => client.readContract({
    ...contract,
    functionName: 'released',
    args: [token.contractAddress as `0x${string}`]
  })))

  return {
    beneficiary,
    startTime,
    duration,
    claimedAmounts
  }
}

export async function getVestingWalletData(walletAddress: string): Promise<VestingWalletData> {
  const { beneficiary, startTime, duration } = await getContractData(walletAddress)
  const tokens = await getTokens(walletAddress)

  return {
    vestingWalletAddress: walletAddress,
    beneficiaryAddress: beneficiary,
    schedule: new VestingSchedule(Number(startTime), Number(duration)),
    tokens: tokens
  }
} 