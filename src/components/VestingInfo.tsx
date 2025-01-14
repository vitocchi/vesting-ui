import { VestingWalletClient } from '@/lib/VestingWalletClient'
import { TokenInfoPresentation } from './VestingInfo/TokenInfoPresentation'
import { AddressInfoPresentation } from './VestingInfo/AddressInfo/AddressInfoPresentation'
import { SupportedNetwork } from '@/lib/Network'


export async function VestingInfoContainer({
  vestingWalletAddress,
  network
}: {
  vestingWalletAddress: `0x${string}`
  network: SupportedNetwork
}) {
  const vestingWalletClient = new VestingWalletClient(vestingWalletAddress, network)
  try {
    const beneficiaryAddress = await vestingWalletClient.getBeneficiary()
    const tokens = await vestingWalletClient.getTokenVestings()
    return (
      <div className="space-y-6">
        <AddressInfoPresentation
          vestingWalletAddress={vestingWalletAddress}
          beneficiaryAddress={beneficiaryAddress}
          network={network}
        />

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <TokenInfoPresentation tokens={tokens} network={network} />
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-red-200">
        <div className="text-red-600">
          <h3 className="font-semibold mb-2">Error Occurred. The address may not be a vesting wallet on this network.</h3>
          <div className="mb-4 text-sm text-gray-600">
            <p>Checked Address: {vestingWalletAddress}</p>
            <p>Network: {network}</p>
          </div>
          <p className="text-sm">
            {error instanceof Error ? error.message : 'Unexpected error occurred.'}
          </p>
        </div>
      </div>
    )
  }
} 

