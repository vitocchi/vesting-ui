import { VestingInfo } from "@/components/VestingInfo"
import { TokenAmount } from "@/lib/TokenAmount";
import { getVestingWalletData } from "@/lib/vestingWallet";
import { scheduler } from "timers/promises";

type Props = {
  params: {
    vestingWalletAddress: string
  }
}


export default async function VestingWalletPage({ params }: Props) {
  const data = await getVestingWalletData(params.vestingWalletAddress)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Vesting Wallet Explorer
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search by Vesting Wallet Address"
                className="w-96 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-4 font-mono"
              />
              <button
                type="button"
                className="absolute right-0 px-3 flex items-center h-full"
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <VestingInfo 
          data={data}
        />
      </div>
    </main>
  )
} 