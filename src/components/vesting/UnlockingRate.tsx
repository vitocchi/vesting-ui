import { TimeUnit } from './types'

type UnlockingRateProps = {
  selectedTimeUnit: TimeUnit
  onTimeUnitChange: (unit: TimeUnit) => void
  rateByUnit: {
    day: string
    month: string
    year: string
  }
}

export function UnlockingRate({
  selectedTimeUnit,
  onTimeUnitChange,
  rateByUnit
}: UnlockingRateProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Unlocking Rate
      </h3>
      
      <div className="flex items-baseline justify-between">
        {/* ... Unlocking Rate の内容 ... */}
      </div>
    </div>
  )
} 