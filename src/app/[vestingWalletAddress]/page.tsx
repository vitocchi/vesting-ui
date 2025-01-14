import { VestingInfoContainer } from "@/components/VestingInfo"
import { isAddress } from "viem";
import { NetworkSelector, } from "@/components/NetworkSelector";
import { AddressSearchBar } from "@/components/AddressSearchBar";
import { SupportedNetwork } from "@/lib/Network";

type Props = {
  params: {
    vestingWalletAddress: `0x${string}`
  }
  searchParams: {
    network: SupportedNetwork
  }
}

export default async function VestingWalletPage({ params, searchParams }: Props) {
  if (!isAddress(params.vestingWalletAddress)) {
    throw new Error('Invalid address')
  }

  return (
    <main className="bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
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
          vestingWalletAddress={params.vestingWalletAddress}
          network={searchParams.network}
        />
      </div>
    </main>
  )
} 