"use client"

import { useState } from 'react'
import { AmountInfo } from './vesting/AmountInfo'
import { AddressInfo } from './vesting/AddressInfo'
import { TimeUnit } from './vesting/types'
import { TokenInfo } from './vesting/TokenInfo'

type TokenData = {
  symbol: string
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
}

type VestingInfoProps = {
  tokens: TokenData[]
  startDate: string
  endDate: string
  currentDate: string
  vestingWalletAddress: string
  beneficiaryAddress: string
}

export function VestingInfo({
  tokens,
  startDate,
  endDate,
  currentDate,
  vestingWalletAddress,
  beneficiaryAddress
}: VestingInfoProps) {
  return (
    <div className="space-y-6">
      <AddressInfo 
        vestingWalletAddress={vestingWalletAddress}
        beneficiaryAddress={beneficiaryAddress}
      />

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <TokenInfo
          tokens={tokens}
          startDate={startDate}
          endDate={endDate}
          currentDate={currentDate}
        />
      </div>
    </div>
  )
} 