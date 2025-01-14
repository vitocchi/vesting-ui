'use client'
import { formatNumber } from '@/components/formatNumber'
import { useState } from 'react'
export type TimeUnit = 'day' | 'month' | 'year' 


type UnlockingRateProps = {
  totalAmount: number
  durationSeconds: number
  symbol: string
}

export function UnlockingRate({ totalAmount, durationSeconds, symbol }: UnlockingRateProps) {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState<'day' | 'month' | 'year'>('day')

  // 日数を計算
  const totalDays = durationSeconds / (1000 * 60 * 60 * 24)

  // レートを計算
  const rateByUnit: Record<TimeUnit, number> = {
    day: totalAmount / totalDays,
    month: totalAmount / (totalDays / 30),
    year: totalAmount / (totalDays / 365)
  }

  return (
    <div>
      <div className="text-sm text-gray-600 mb-1">Unlocking Rate</div>
      <div className="flex items-baseline space-x-2">
        <select
          value={selectedTimeUnit}
          onChange={(e) => setSelectedTimeUnit(e.target.value as 'day' | 'month' | 'year')}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          <option value="day">per Day</option>
          <option value="month">per Month</option>
          <option value="year">per Year</option>
        </select>
        <span className="font-medium text-gray-900">{formatNumber(rateByUnit[selectedTimeUnit])} {symbol}</span>
      </div>
    </div>
  )

}