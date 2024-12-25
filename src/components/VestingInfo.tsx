"use client"

import { Card } from './Card'
import { useState } from 'react'
import { AmountInfoOriginal } from './vesting/AmountInfoOriginal'
import { AmountInfoAlternative } from './vesting/AmountInfoAlternative'
import { TimeUnit } from './vesting/types'

export function VestingInfo() {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState<TimeUnit>('day')

  // パーセンテージの計算
  const totalAmount = 1_000_000
  const unlockedAmount = 250_000
  const claimedAmount = 200_000
  const claimableAmount = unlockedAmount - claimedAmount
  const unlockedPercentage = (unlockedAmount / totalAmount) * 100
  const claimedPercentage = (claimedAmount / totalAmount) * 100
  const claimablePercentage = ((unlockedAmount - claimedAmount) / totalAmount) * 100

  const rateByUnit = {
    day: '2,739.72 TOKEN',
    month: '83,333.33 TOKEN',
    year: '1,000,000 TOKEN'
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600">Vesting Wallet</div>
            <div className="font-mono text-gray-900">
              0x1234567890123456789012345678901234567890
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Beneficiary</div>
            <div className="font-mono text-gray-900">
              0x0987654321098765432109876543210987654321
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <AmountInfoOriginal
          totalAmount={totalAmount}
          unlockedAmount={unlockedAmount}
          claimedAmount={claimedAmount}
          claimableAmount={claimableAmount}
          unlockedPercentage={unlockedPercentage}
          claimedPercentage={claimedPercentage}
          claimablePercentage={claimablePercentage}
          selectedTimeUnit={selectedTimeUnit}
          onTimeUnitChange={setSelectedTimeUnit}
          rateByUnit={rateByUnit}
          startDate="2024/01/01"
          endDate="2025/01/01"
          currentDate="2024/03/15"
        />
      </div>
    </div>
  )
} 