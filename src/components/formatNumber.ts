export function formatNumber(value: number): string {
  return (
    value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  )
}