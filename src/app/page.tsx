import { VestingInfo } from '@/components/VestingInfo'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Vesting Wallet Viewer
          </h1>
          <VestingInfo />
        </div>
      </div>
    </main>
  )
}
