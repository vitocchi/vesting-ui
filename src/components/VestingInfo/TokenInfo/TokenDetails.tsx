'use client'
import { UnlockingRate } from './UnlockingRate'
import dayjs from 'dayjs'
import { formatNumber } from '@/components/formatNumber'

export type TokenDetailsProps = {
  currentBalance: number
  claimed: number
  claimable: number
  currentDate: Date
  startAt: Date
  vestingDurationSeconds: number
  symbol: string
}

export function TokenDetails({
  currentBalance,
  claimed,
  claimable,
  currentDate,
  startAt,
  vestingDurationSeconds,
  symbol,
}: TokenDetailsProps) {
  const total = currentBalance + claimed;
  const unlocked = claimable + claimed;
  const unlockedPercentage = (unlocked / total) * 100
  const claimedPercentage = (claimed / total) * 100
  const claimablePercentage = (claimable / total) * 100
  const remainingPercentage = (total - unlocked) / total * 100
  const endAt = dayjs(startAt).add(vestingDurationSeconds, 'seconds')
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="mb-4 flex justify-between items-baseline border-b pb-4">
        <span className="text-sm font-medium text-gray-600">Total</span>
        <span className="text-lg font-medium text-gray-900">{formatNumber(total)} {symbol}</span>
      </div>

      <div className="space-y-6">
        <div>
          <div className="mt-2">
            <UnlockingRate
              totalAmount={total}
              durationSeconds={vestingDurationSeconds}
              symbol={symbol}
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="relative">
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-emerald-400 h-4 rounded-full" 
                   style={{ width: `${unlockedPercentage}%` }}>
                <div className="bg-blue-600 h-4 rounded-full relative" 
                     style={{ width: `${(claimed / unlocked) * 100}%` }}>
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
                      <span>Claimed</span>
                    </div>
                  </td>
                  <td className="text-right">{formatNumber(claimed)} {symbol}</td>
                  <td className="text-right">{claimedPercentage}%</td>
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
                      <span>Claimable</span>
                    </div>
                  </td>
                  <td className="text-right">{formatNumber(claimable)} {symbol}</td>
                  <td className="text-right">{claimablePercentage}%</td>
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                      <span>Remaining</span>
                    </div>
                  </td>
                  <td className="text-right">{formatNumber(total - claimed - claimable)} {symbol}</td>
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