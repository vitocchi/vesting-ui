'use client'
import { useState } from 'react'

type AddressInfoProps = {
  vestingWalletAddress: string
  beneficiaryAddress: string
}

export function AddressInfo({ vestingWalletAddress, beneficiaryAddress }: AddressInfoProps) {
  const [copyMessage, setCopyMessage] = useState<string>('')

  const copyToClipboard = async (address: string) => {
    await navigator.clipboard.writeText(address)
    setCopyMessage('Copied!')
    setTimeout(() => setCopyMessage(''), 2000)
  }

  const getEtherscanUrl = (address: string) => 
    `https://etherscan.io/address/${address}`

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 relative">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-600">Vesting Wallet</div>
          <div className="flex items-center gap-2">
            <div className="font-mono text-gray-900">
              {vestingWalletAddress}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => copyToClipboard(vestingWalletAddress)}
                className="p-1 hover:bg-gray-100 rounded"
                title="Copy to clipboard"
              >
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <a
                href={getEtherscanUrl(vestingWalletAddress)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-gray-100 rounded"
                title="View on Etherscan"
              >
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Beneficiary</div>
          <div className="flex items-center gap-2">
            <div className="font-mono text-gray-900">
              {beneficiaryAddress}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => copyToClipboard(beneficiaryAddress)}
                className="p-1 hover:bg-gray-100 rounded"
                title="Copy to clipboard"
              >
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <a
                href={getEtherscanUrl(beneficiaryAddress)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-gray-100 rounded"
                title="View on Etherscan"
              >
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {copyMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg text-sm">
          {copyMessage}
        </div>
      )}
    </div>
  )
} 