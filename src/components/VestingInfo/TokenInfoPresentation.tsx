'use client'
import { useState } from 'react'
import { TokenDetails } from './TokenInfo/TokenDetails'
import { TokenSelector } from './TokenInfo/TokenSelector'
import { ExplorerLink } from '../ExplorerLink'
import { SupportedNetwork } from '@/lib/Network'

export function TokenInfoPresentation({ tokens, network }: { tokens: TokenDetails[], network: SupportedNetwork }) {
  if (tokens.length === 0) {
    return <div>No tokens found</div>
  }

  const [selectedToken, setSelectedToken] = useState<TokenDetails>(tokens[0])
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Token Information
        </h3>
        <div className="flex">
          <TokenSelector
            tokenSymbols={tokens.map(token => token.symbol)}
            selectedSymbol={selectedToken.symbol}
            onSelect={(symbol) => setSelectedToken(tokens.find(token => token.symbol === symbol)!)}
          />
          <ExplorerLink
            address={selectedToken.address}
            network={network}
          />
        </div>
      </div>

      <TokenDetails
        address={selectedToken.address}
        currentBalance={selectedToken.currentBalance}
        released={selectedToken.released}
        releasable={selectedToken.releasable}
        currentDate={selectedToken.currentDate}
        vestingDurationSeconds={selectedToken.vestingDurationSeconds}
        startAt={selectedToken.startAt}
        symbol={selectedToken.symbol}
      />
    </div>
  )
} 