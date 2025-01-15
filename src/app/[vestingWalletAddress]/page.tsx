import { VestingInfoContainer } from "@/components/VestingInfo"
import { isAddress } from "viem";
import { NetworkSelector } from "@/components/NetworkSelector";
import { AddressSearchBar } from "@/components/AddressSearchBar";
import { SupportedNetwork } from "@/lib/Network";
import Image from 'next/image'

type PageProps = {
  params: Promise<{
    vestingWalletAddress: string
  }>
  searchParams: Promise<{
    network?: SupportedNetwork
  }>
}

export default async function VestingWalletPage({ params, searchParams }: PageProps) {
  const { vestingWalletAddress } = await params
  const network = (await searchParams)?.network || 'ethereum'
  if (!isAddress(vestingWalletAddress)) {
    throw new Error('Invalid address')
  }

  return (
    <main className="bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={32} 
              height={32}
            />
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Vesting Wallet Explorer
            </h1>
          </div>
          <div className="w-1/2">
            <AddressSearchBar />
          </div>
          <NetworkSelector/>
        </div>

        <VestingInfoContainer 
          vestingWalletAddress={vestingWalletAddress}
          network={network}
        />
      </div>
    </main>
  )
} 