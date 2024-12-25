'use client'
import { useState } from 'react'
import { TokenDetails } from './TokenDetails'
import { VestingSchedule } from '@/lib/VestingSchedule'
import { Token } from '@/lib/alchemy'

export function TokenInfo({ tokens, schedule }: { tokens: Token[], schedule: VestingSchedule }) {
  const [selectedToken, setSelectedToken] = useState<Token>(tokens[0])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Token Information
        </h3>
        <select
          value={selectedToken.symbol}
          onChange={(e) => setSelectedToken(tokens.find(t => t.symbol === e.target.value)!)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          {tokens.map(token => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>
      
      <TokenDetails
        token={selectedToken}
        schedule={schedule}
      />
    </div>
  )
} 