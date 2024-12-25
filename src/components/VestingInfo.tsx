"use client"

import { useState } from 'react'
import { AmountInfo } from './vesting/AmountInfo'
import { AddressInfo } from './vesting/AddressInfo'
import { TimeUnit } from './vesting/types'
import { TokenInfo } from './vesting/TokenInfo'
import { VestingWalletData } from '@/lib/vestingWallet'



export function VestingInfo({
  data
}: {
  data: VestingWalletData
}) {
  return (
    <div className="space-y-6">
      <AddressInfo 
        vestingWalletAddress={data.vestingWalletAddress}
        beneficiaryAddress={data.beneficiaryAddress}
      />

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <TokenInfo
          tokens={data.tokens}
          schedule={data.schedule}
        />
      </div>
    </div>
  )
} 