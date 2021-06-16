import {
    add,
    endOfWeek,
    isAfter,
    isBefore,
    isSameOrAfter,
    isSameOrBefore,
    startOfWeek,
    subtract,
    toDate,
    toMoment
} from "./DateWrapper"

const firstDate = "2011-10-05T14:48:00.000Z"
const secondDate = "2021-06-03T07:30:00.000Z"

console.group("wrapper functions")

console.log({
    firstDate,
    toDate: toDate(firstDate),
    toMoment: toMoment(firstDate),
    add: add(firstDate, {"days": 1}),
    subtract: subtract(firstDate, {"days": 1}),
    startOfWeek: startOfWeek(firstDate),
    endOfWeek: endOfWeek(firstDate),
    secondDate,
    isAfter: isAfter(firstDate, secondDate),
    isBefore: isBefore(firstDate, secondDate),
    isSameOrAfter: isSameOrAfter(firstDate, secondDate),
    isSameOrBefore: isSameOrBefore(firstDate, secondDate)
})

console.groupEnd()

