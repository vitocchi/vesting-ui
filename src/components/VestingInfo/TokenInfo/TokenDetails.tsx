'use client'
import { UnlockingRate } from './UnlockingRate'
import dayjs from 'dayjs'
import { formatNumber } from '@/components/formatNumber'

export type TokenDetails= {
  currentBalance: number
  released: number
  releasable: number
  currentDate: Date
  startAt: Date
  vestingDurationSeconds: number
  symbol: string
  address: `0x${string}`
}

export function TokenDetails({
  currentBalance,
  released,
  releasable,
  currentDate,
  startAt,
  vestingDurationSeconds,
  symbol,
  address,
  } : TokenDetails) {
  const total = currentBalance + released;
  const unlocked = releasable + released;
  const unlockedPercentage = (unlocked / total) * 100
  const releasedPercentage = (released / total) * 100
  const releasablePercentage = (releasable / total) * 100
  const remainingPercentage = (total - unlocked) / total * 100
  const endAt = dayjs(startAt).add(vestingDurationSeconds, 'seconds')
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="mb-4 flex justify-between items-baseline border-b pb-4">
        <span className="text-sm font-medium text-gray-601">Total</span>
        <span className="text-lg font-medium text-gray-900">{formatNumber(total)} {symbol}</span>
      </div>

      <div className="space-y-6">
          <UnlockingRate
            totalAmount={total}
            durationSeconds={vestingDurationSeconds}
            symbol={symbol}
          />

        <div className="pt-4">
          <div className="relative">
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-emerald-400 h-4 rounded-full"
                style={{ width: `${unlockedPercentage}%` }}>
                <div className="bg-blue-600 h-4 rounded-full relative"
                  style={{ width: `${(released / unlocked) * 100}%` }}>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <div className="flex flex-col">
                <div>Start:</div>
                <div>{dayjs(startAt).format()}</div>
              </div>
              <div className="flex flex-col text-right">
                <div>End:</div>
                <div>{endAt.format()}</div>
              </div>
            </div>
            <div className="mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th className="text-left pb-2">Status</th>
                    <th className="text-right pb-2">Amount</th>
                    <th className="text-right pb-2">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                        <span>Released</span>
                      </div>
                    </td>
                    <td className="text-right">{formatNumber(released)} {symbol}</td>
                    <td className="text-right">{releasedPercentage}%</td>
                  </tr>
                  <tr>
                    <td className="py-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
                        <span>Releasable</span>
                      </div>
                    </td>
                    <td className="text-right">{formatNumber(releasable)} {symbol}</td>
                    <td className="text-right">{releasablePercentage}%</td>
                  </tr>
                  <tr>
                    <td className="py-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                        <span>Remaining</span>
                      </div>
                    </td>
                    <td className="text-right">{formatNumber(total - released - releasable)} {symbol}</td>
                    <td className="text-right">{remainingPercentage}%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-1">
                      <div className="flex items-center font-medium">
                        <span>Total</span>
                      </div>
                    </td>
                    <td className="text-right font-medium">{formatNumber(total)} {symbol}</td>
                    <td className="text-right font-medium">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
} 