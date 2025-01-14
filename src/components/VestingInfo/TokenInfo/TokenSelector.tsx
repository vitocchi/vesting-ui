'use client'

interface TokenSelectorProps {
  tokenSymbols: string[]
  selectedSymbol: string | undefined
  onSelect: (symbol: string) => void
}

export function TokenSelector({ tokenSymbols, selectedSymbol, onSelect }: TokenSelectorProps) {
  return (
    <select
      value={selectedSymbol}
      onChange={(e) => onSelect(e.target.value)}
      className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
    >
      {tokenSymbols.map(symbol => (
        <option key={symbol} value={symbol}>
          {symbol}
        </option>
      ))}
    </select>
  )
} 