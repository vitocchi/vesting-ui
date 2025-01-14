import { formatUnits } from 'viem'

export class TokenAmount {
  public readonly wei: bigint
  public readonly decimals: number

  constructor(wei: bigint, decimals: number) {
    this.wei = wei
    this.decimals = decimals
  }

  get units(): number {
    return Number(formatUnits(this.wei, this.decimals))
  }

  format(): string {
    return this.units.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  add(a: TokenAmount): TokenAmount {
    return new TokenAmount(this.wei + a.wei, this.decimals)
  }

  subtract(a: TokenAmount): TokenAmount {
    return new TokenAmount(this.wei - a.wei, this.decimals)
  }

  multiply(a: number): TokenAmount {
    return new TokenAmount(this.wei * BigInt(a), this.decimals)
  }

  divide(a: number): TokenAmount {
    return new TokenAmount(this.wei / BigInt(a), this.decimals)
  }

  divideBy(a: TokenAmount): number {
    return Number(this.wei / a.wei)
  }

} 