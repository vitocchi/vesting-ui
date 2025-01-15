'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { NetworkSelector } from '@/components/NetworkSelector'
import { SupportedNetwork } from '@/lib/Network'

export default function Home() {
  const router = useRouter()
  const [searchAddress, setSearchAddress] = useState('')
  const [searchNetwork, setSearchNetwork] = useState<SupportedNetwork>('Ethereum')

  const handleSearch = () => {
    if (searchAddress) {
      router.push(`/${searchAddress}?network=${searchNetwork}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <main className="bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Vesting Wallet Explorer
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            View detailed information about any vesting wallet. Enter the wallet address below to see token amounts, vesting schedules, and release status.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search by Vesting Wallet Address"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base pl-4 pr-12 py-3 font-mono"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={handleSearch}
                >
                  <svg className="h-6 w-6 text-gray-400 hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <NetworkSelector initialNetwork={searchNetwork} onChange={(network) => setSearchNetwork(network)} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-3">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Tokens</h3>
            <p className="text-gray-600">Monitor vesting schedules and token amounts for any vesting wallet address.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-3">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Releases</h3>
            <p className="text-gray-600">View released amounts and check available tokens ready for releaseing.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-3">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-gray-600">Get up-to-date information about vesting progress and unlocked tokens.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
