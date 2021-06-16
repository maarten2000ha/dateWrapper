// import {
//     add,
//     addTime,
//     endOfWeek,
//     isAfter,
//     isBefore,
//     isSameOrAfter,
//     isSameOrBefore,
//     startOfWeek,
//     subtract,
//     subtractTime,
//     toDate,
//     toMoment,
//     isValid,
//     isValidTime,
//     timeToDate
// } from "../MomentWrapper"
import {
    add,
    addTime,
    endOfWeek,
    isAfter,
    isBefore,
    isSameOrAfter,
    isSameOrBefore,
    isValid,
    isValidTime,
    startOfWeek,
    subtract,
    subtractTime,
    timeToDate,
    toDate
} from "../DateFnsWrapper"


describe("DateWrapper", () => {
    const date = "2021-06-15T07:30:00.000Z"
    const time = "12:00"

    it("can add days to date", () => {
        const result = add(date, {"days": 5})
        expect(result).toBe("2021-06-20T07:30:00.000Z")
    })

    it("can subtract weeks from date", () => {
        const result = subtract(date, {"weeks": 2})
        expect(result).toBe("2021-06-01T07:30:00.000Z")
    })

    it("can add hours to time", () => {
        const result = addTime(time, {"hours": 5})
        expect(result).toBe("17:00")
    })

    it("can subtract minutes from time", () => {
        const result = subtractTime(time, {"minutes": 30})
        expect(result).toBe("11:30")
    })

    it("gives the monday of the week", () => {
        const result = startOfWeek(date)
        expect(result).toBe("2021-06-14T00:00:00.000Z")
    })

    it("gives the sunday of the week", () => {
        const result = endOfWeek(date)
        expect(result).toBe("2021-06-20T23:59:59.999Z")
    })

    it("returns true when date is after date 2 days ago", () => {
        const secondDate = subtract(date, {"days": 2})
        const result = isAfter(date, secondDate)
        expect(result).toBe(true)
    })

    it("returns false when date is not before date 2 days ago", () => {
        const secondDate = subtract(date, {"days": 2})
        const result = isBefore(date, secondDate)
        expect(result).toBe(false)
    })

    it("returns true when date is same or after than the date", () => {
        const result = isSameOrAfter(date, date)
        expect(result).toBe(true)
    })

    it("returns true when date is same or before date in 1 day", () => {
        const secondDate = add(date, {"days": 1})
        const result = isSameOrBefore(date, secondDate)
        expect(result).toBe(true)
    })

    it("returns date object", () => {
        const result = toDate(date)
        expect(typeof result).toBe("object")
    })

    it("returns true when date is valid", () => {
        const result = isValid(date)
        expect(result).toBe(true)
    })

    it("returns false when date is invalid", () => {
        const result = isValid("date")
        expect(result).toBe(false)
    })

    it("returns false when time is invalid", () => {
        const result = isValidTime("25:00")
        expect(result).toBe(false)
    })

    it("validates time and returns date", () => {
        const today = new Date()
        today.setUTCHours(12, 0, 0,0)
        const result = timeToDate(time)
        expect(typeof result).toBe("object")
        expect(result).toEqual(today)
    })
})
