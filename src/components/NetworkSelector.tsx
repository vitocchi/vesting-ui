'use client'

import React, { useState } from 'react'
import { SUPPORTED_NETWORKS, SupportedNetwork } from '@/lib/Network'




export function NetworkSelector({initialNetwork, onChange}: {initialNetwork: SupportedNetwork, onChange: (network: SupportedNetwork) => void}) {
  const [selectedNetwork, setSelectedNetwork] = useState<SupportedNetwork>(initialNetwork)

  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNetwork(e.target.value as SupportedNetwork)
    onChange(e.target.value as SupportedNetwork)
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