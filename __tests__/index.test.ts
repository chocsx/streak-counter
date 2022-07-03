import { streakCounter } from '../src/index';

describe("basic test", () => {
  it("should pass", () => {
      expect(true).toBe(true)
  })
})

describe('streakCounter', () => {
  it('should return a streak object with currentCount, startDate and lastLoginDate', () => {
    const mockLocalStorage = ''
    const date = new Date()
    const streak = streakCounter(mockLocalStorage, date)

    expect(streak.hasOwnProperty('currentCount')).toBe(true)
    expect(streak.hasOwnProperty('startDate')).toBe(true)
    expect(streak.hasOwnProperty('lastLoginDate')).toBe(true)
  })
})