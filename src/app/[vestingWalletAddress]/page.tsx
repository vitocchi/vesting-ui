import { VestingInfoContainer } from "@/components/VestingInfo"
import { isAddress } from "viem";
import { SupportedNetwork } from "@/lib/Network";
import { Header } from "@/components/Header";

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
  const currentNetwork  = (await searchParams)?.network || 'ethereum'
  if (!isAddress(vestingWalletAddress)) {
    throw new Error('Invalid address')
  }

  return (
    <main className="bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header currentNetwork={currentNetwork} />
        <VestingInfoContainer 
          vestingWalletAddress={vestingWalletAddress}
          network={currentNetwork}
        />
      </div>
    </main>
  )
} 