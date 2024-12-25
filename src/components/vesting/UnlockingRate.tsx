'use client'
import { useState } from 'react'

type UnlockingRateProps = {
  totalAmount: number
  startDate: string
  endDate: string
  symbol: string
}

export function UnlockingRate({ totalAmount, startDate, endDate, symbol }: UnlockingRateProps) {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState<'day' | 'month' | 'year'>('day')

  // 日数を計算
  const start = new Date(startDate)
  const end = new Date(endDate)
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)

  // レートを計算
  const rateByUnit = {
    day: `${(totalAmount / totalDays).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${symbol}`,
    month: `${(totalAmount / (totalDays / 30)).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${symbol}`,
    year: `${(totalAmount / (totalDays / 365)).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${symbol}`
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
        <span className="font-medium text-gray-900">{rateByUnit[selectedTimeUnit]}</span>
      </div>
    </div>
  )
}