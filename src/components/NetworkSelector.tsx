'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SUPPORTED_NETWORKS } from '@/lib/Network'




export function NetworkSelector() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedNetwork, setSelectedNetwork] = useState<string>(
    searchParams.get('network') || 'Ethereum'
  )

  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNetwork(e.target.value)
    
    // URLのクエリパラメータを更新
    const params = new URLSearchParams(searchParams.toString())
    params.set('network', e.target.value)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="relative">
      <select
        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={selectedNetwork}
        onChange={handleNetworkChange}
      >
        {SUPPORTED_NETWORKS.map((network) => (
          <option key={network} value={network}>
            {network}
          </option>
        ))}
      </select>
    </div>
  )
}