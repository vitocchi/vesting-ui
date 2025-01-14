'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function AddressSearchBar() {
  const router = useRouter()
  const [searchAddress, setSearchAddress] = useState('')
  const searchParams = useSearchParams()
  const selectedNetwork = searchParams.get('network') || 'Ethereum'

  const handleSearch = () => {
    if (searchAddress) {
      router.push(`/${searchAddress}?network=${selectedNetwork}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by Vesting Wallet Address"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-4 pr-12 py-1.5 font-mono"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={handleSearch}
        >
          <svg className="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
} 