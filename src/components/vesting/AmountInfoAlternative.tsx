type AmountInfoProps = {
  totalAmount: number
  unlockedAmount: number
  claimedAmount: number
  claimableAmount: number
  unlockedPercentage: number
  claimedPercentage: number
  claimablePercentage: number
}

export function AmountInfoAlternative({
  totalAmount,
  unlockedAmount,
  claimedAmount,
  claimableAmount,
  unlockedPercentage,
  claimedPercentage,
  claimablePercentage
}: AmountInfoProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Amount Information (Alternative)
      </h3>
      
      <div className="space-y-6">
        <div className="border-2 border-gray-200 rounded-lg p-4">
          <div className="mb-3 flex justify-between items-baseline">
            <span className="text-sm font-medium text-gray-600">Total</span>
            <span className="text-lg font-medium text-gray-900">{totalAmount.toLocaleString()} TOKEN</span>
          </div>

          <div className="mb-2">
            <div className="h-12 relative bg-gray-100 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-blue-600" style={{ width: `${claimedPercentage}%` }}>
                <div className="h-full flex items-center justify-between px-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">Claimed</span>
                    <span className="text-white font-medium">{claimedAmount.toLocaleString()}</span>
                  </div>
                  <span className="text-white text-sm">{claimedPercentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="h-12 relative bg-gray-100 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-emerald-200" style={{ width: `${claimablePercentage}%` }}>
                <div className="h-full flex items-center justify-between px-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Claimable</span>
                    <span className="text-gray-700 font-medium">{claimableAmount.toLocaleString()}</span>
                  </div>
                  <span className="text-gray-700 text-sm">{claimablePercentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-12 relative bg-gray-100 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gray-200" style={{ width: `${100 - unlockedPercentage}%` }}>
                <div className="h-full flex items-center justify-between px-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Remaining</span>
                    <span className="text-gray-700 font-medium">{(totalAmount - unlockedAmount).toLocaleString()}</span>
                  </div>
                  <span className="text-gray-700 text-sm">{(100 - unlockedPercentage).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 