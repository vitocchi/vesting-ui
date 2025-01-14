'use client'
import { useState } from 'react'
import { TokenDetails, TokenDetailsProps } from './TokenInfo/TokenDetails'
import { TokenSelector } from './TokenInfo/TokenSelector'
export function TokenInfoPresentation({ tokens }: { tokens: TokenDetailsProps[] }) {
  if (tokens.length === 0) {
    return <div>No tokens found</div>
  }

  const [selectedToken, setSelectedToken] = useState<TokenDetailsProps>(tokens[0])
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Token Information
        </h3>
        <TokenSelector
          tokenSymbols={tokens.map(token => token.symbol)}
          selectedSymbol={selectedToken.symbol}
          onSelect={(symbol) => setSelectedToken(tokens.find(token => token.symbol === symbol)!)}
        />
      </div>
      
      <TokenDetails
        currentBalance={selectedToken.currentBalance}
        claimed={selectedToken.claimed}
        claimable={selectedToken.claimable}
        currentDate={selectedToken.currentDate}
        vestingDurationSeconds={selectedToken.vestingDurationSeconds}
        startAt={selectedToken.startAt}
        symbol={selectedToken.symbol}
      />
    </div>
  )
} 