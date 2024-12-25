'use client'
import { useState } from 'react'
import { TokenDetails } from './TokenDetails'

type TokenData = {
  symbol: string
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
}

type TokenInfoProps = {
  tokens: TokenData[]
  startDate: string
  endDate: string
  currentDate: string
}

export function TokenInfo({ tokens, startDate, endDate, currentDate }: TokenInfoProps) {
  const [selectedToken, setSelectedToken] = useState<TokenData>(tokens[0])

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
        totalAmount={selectedToken.totalAmount}
        unlockedAmount={selectedToken.unlockedAmount}
        claimedAmount={selectedToken.claimedAmount}
        symbol={selectedToken.symbol}
        startDate={startDate}
        endDate={endDate}
        currentDate={currentDate}
      />
    </div>
  )
} 