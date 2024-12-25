'use client'
import { useState } from 'react'
import { AmountDetails } from './AmountDetails'

type TokenInfo = {
  symbol: string
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
}

type AmountInfoProps = {
  tokens: TokenInfo[]
  startDate: string
  endDate: string
  currentDate: string
}

export function AmountInfo({ tokens, startDate, endDate, currentDate }: AmountInfoProps) {
  const [selectedToken, setSelectedToken] = useState<TokenInfo>(tokens[0])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Amount Information
        </h3>
        <select
          value={selectedToken.symbol}
          onChange={(e) => setSelectedToken(tokens.find(t => t.symbol === e.target.value)!)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {tokens.map(token => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>
      
      <AmountDetails
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