type AmountInfoProps = {
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
  claimableAmount: number
  unlockedPercentage: number
  claimedPercentage: number
  claimablePercentage: number
  selectedTimeUnit: 'day' | 'month' | 'year'
  onTimeUnitChange: (unit: 'day' | 'month' | 'year') => void
  rateByUnit: {
    day: string
    month: string
    year: string
  }
  startDate: string  // "2024/01/01" format
  endDate: string   // "2025/01/01" format
  currentDate: string // "2024/03/15" format
  vestingWalletAddress: string
  beneficiaryAddress: string
}

export function AmountInfoOriginal({
  totalAmount,
  unlockedAmount,
  claimedAmount,
  claimableAmount,
  unlockedPercentage,
  claimedPercentage,
  claimablePercentage,
  selectedTimeUnit,
  onTimeUnitChange,
  rateByUnit,
  startDate,
  endDate,
  currentDate,
  vestingWalletAddress,
  beneficiaryAddress
}: AmountInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">
          Amount Information
        </h3>
        <div className="text-right text-sm">
          <div className="mb-1">
            <span className="text-gray-600">Vesting Wallet: </span>
            <span className="font-medium text-gray-900">{vestingWalletAddress}</span>
          </div>
          <div>
            <span className="text-gray-600">Beneficiary: </span>
            <span className="font-medium text-gray-900">{beneficiaryAddress}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="mb-4 flex justify-between items-baseline border-b pb-4">
            <span className="text-sm font-medium text-gray-600">Total</span>
            <span className="text-lg font-medium text-gray-900">{totalAmount.toLocaleString()} TOKEN</span>
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
                  {unlockedAmount.toLocaleString()} TOKEN
                  <span className="text-gray-500 text-xs ml-1">
                    ({unlockedPercentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-sm text-gray-600 mb-1">Unlocking Rate</div>
                <div className="flex items-baseline space-x-2">
                  <select
                    value={selectedTimeUnit}
                    onChange={(e) => onTimeUnitChange(e.target.value as 'day' | 'month' | 'year')}
                    className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="day">per Day</option>
                    <option value="month">per Month</option>
                    <option value="year">per Year</option>
                  </select>
                  <span className="font-medium text-gray-900">{rateByUnit[selectedTimeUnit]}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <div className="text-sm text-gray-600">Claimed</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <div className="font-medium text-gray-900">
                    {claimedAmount.toLocaleString()} TOKEN
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
                    {claimableAmount.toLocaleString()} TOKEN
                    <span className="text-gray-500 text-xs ml-1">
                      ({claimablePercentage.toFixed(1)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-sm text-gray-600">Remaining (Total - Unlocked)</div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <div className="font-medium text-gray-900">
                  {(totalAmount - unlockedAmount).toLocaleString()} TOKEN
                  <span className="text-gray-500 text-xs ml-1">
                    ({(100 - unlockedPercentage).toFixed(1)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
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
            <div className="flex gap-4 mt-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-1"></div>
                <span>Claimed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-400 mr-1"></div>
                <span>Claimable</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                <span>Remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 