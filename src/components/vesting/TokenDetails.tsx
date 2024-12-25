import { Token } from '@/lib/alchemy'
import { VestingSchedule } from '@/lib/VestingSchedule'
import { UnlockingRate } from './UnlockingRate'

type TokenDetailsProps = {
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
  symbol: string
  startDate: string
  endDate: string
  currentDate: string
}

export function TokenDetails({
  token,
  schedule
}: {
  token: Token
  schedule: VestingSchedule
}) {
  const currentDate = dayjs()
  const unlockedRate = schedule.getUnlockedRate(currentDate)
  const unlockedAmount = token.balance.multiply(unlockedRate)

  const claimableAmount = unlockedAmount.subtract(token.balance)
  const unlockedPercentage = (unlockedAmount / token.balance) * 100
  const claimedPercentage = (claimedAmount / totalAmount) * 100
  const claimablePercentage = (claimableAmount / totalAmount) * 100

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="mb-4 flex justify-between items-baseline border-b pb-4">
        <span className="text-sm font-medium text-gray-600">Total</span>
        <span className="text-lg font-medium text-gray-900">{totalAmount.toLocaleString()} {symbol}</span>
      </div>

      <div className="space-y-6">
        <div>
          <div className="text-sm text-gray-600">Unlocked (Claimed + Claimable)</div>
          <div className="flex items-center mt-1">
            <div className="flex items-center space-x-1 mr-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-xs text-gray-500">+</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <div className="font-medium text-gray-900">
              {unlockedAmount.toLocaleString()} {symbol}
              <span className="text-gray-500 text-xs ml-1">
                ({unlockedPercentage.toFixed(1)}%)
              </span>
            </div>
          </div>
          <div className="mt-2">
            <UnlockingRate
              totalAmount={totalAmount}
              startDate={startDate}
              endDate={endDate}
              symbol={symbol}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="text-sm text-gray-600">Claimed</div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
              <div className="font-medium text-gray-900">
                {claimedAmount.toLocaleString()} {symbol}
                <span className="text-gray-500 text-xs ml-1">
                  ({claimedPercentage.toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Claimable</div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
              <div className="font-medium text-gray-900">
                {claimableAmount.toLocaleString()} {symbol}
                <span className="text-gray-500 text-xs ml-1">
                  ({claimablePercentage.toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="relative">
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-emerald-400 h-4 rounded-full" 
                   style={{ width: `${unlockedPercentage}%` }}>
                <div className="bg-blue-600 h-4 rounded-full relative" 
                     style={{ width: `${(claimedAmount / unlockedAmount) * 100}%` }}>
                </div>
              </div>
              <div className="absolute top-0 h-4 bg-emerald-400 rounded-r-full"
                   style={{ width: `${(claimableAmount / unlockedAmount) * 100}%`, left: `${(claimedAmount / unlockedAmount) * 100}%` }}>
              </div>
              <div className="absolute top-0 right-0 h-4 bg-gray-300 rounded-full" 
                   style={{ width: `${100 - unlockedPercentage}%` }}>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <div>Start: {startDate}</div>
              <div className="absolute" style={{ left: `${unlockedPercentage}%`, transform: 'translateX(-50%)' }}>
                Now: {currentDate}
              </div>
              <div>End: {endDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 