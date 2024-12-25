import dayjs from 'dayjs'
import { TokenAmount } from './TokenAmount'

export class VestingSchedule {
  public startAt: dayjs.Dayjs
  public endAt: dayjs.Dayjs
  public durationSeconds: number

  constructor(startAt: number, durationSeconds: number) {
    this.startAt = dayjs.unix(startAt)
    this.durationSeconds = durationSeconds
    this.endAt = this.startAt.add(durationSeconds, 'second')
  }

  getUnlockedRate(currentDate: dayjs.Dayjs): number {
    const elapsedSeconds = currentDate.diff(this.startAt, 'second')
    return elapsedSeconds / this.durationSeconds
  }
} 