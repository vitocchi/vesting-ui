import { VestingInfo } from '@/components/VestingInfo'

export default function Home() {
  const tokens = [
    {
      symbol: 'TOKEN',
      totalAmount: 1_000_000,
      unlockedAmount: 250_000,
      claimedAmount: 200_000,
    },
    {
      symbol: 'REWARD',
      totalAmount: 500_000,
      unlockedAmount: 125_000,
      claimedAmount: 100_000,
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Vesting Wallet Viewer
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
          tokens={tokens}
          startDate="2024/01/01"
          endDate="2025/01/01"
          currentDate="2024/03/15"
          vestingWalletAddress="0x1234567890123456789012345678901234567890"
          beneficiaryAddress="0x0987654321098765432109876543210987654321"
        />
      </div>
    </main>
  )
}
