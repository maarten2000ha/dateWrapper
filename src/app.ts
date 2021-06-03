import {
    add as mAdd,
    endOfWeek as mEndOfWeek,
    isAfter as mIsAfter,
    isBefore as mIsBefore,
    isSameOrAfter as mIsSameOrAfter,
    isSameOrBefore as mIsSameOrBefore,
    startOfWeek as mStartOfWeek,
    subtract as mSubtract,
    toDate as mToDate,
    toMoment
} from "./MomentWrapper";
import {
    add as dAdd,
    endOfWeek as dEndOfWeek,
    isAfter as dIsAfter,
    isBefore as dIsBefore,
    isSameOrAfter as dIsSameOrAfter,
    isSameOrBefore as dIsSameOrBefore,
    startOfWeek as dStartOfWeek,
    subtract as dSubtract,
    toDate as dToDate,
} from "./DateFnsWrapper";


const firstDate = "2011-10-05T14:48:00.000Z"
const secondDate = "2021-06-03T07:30:00.000Z"

console.group("moment wrapper functions")

console.log({
    firstDate,
    toDate: mToDate(firstDate),
    toMoment: toMoment(firstDate),
    add: mAdd(firstDate, {"days": 1}),
    subtract: mSubtract(firstDate, {"days": 1}),
    startOfWeek: mStartOfWeek(firstDate),
    endOfWeek: mEndOfWeek(firstDate),
    secondDate,
    isAfter: mIsAfter(firstDate, secondDate),
    isBefore: mIsBefore(firstDate, secondDate),
    isSameOrAfter: mIsSameOrAfter(firstDate, secondDate),
    isSameOrBefore: mIsSameOrBefore(firstDate, secondDate)
})

console.groupEnd()

console.group("date-fns wrapper functions")

console.log({
    firstDate,
    toDate: dToDate(firstDate),
    toMoment: toMoment(firstDate),
    add: dAdd(firstDate, {"days": 1}),
    subtract: dSubtract(firstDate, {"days": 1}),
    startOfWeek: dStartOfWeek(firstDate),
    endOfWeek: dEndOfWeek(firstDate),
    secondDate,
    isAfter: dIsAfter(firstDate, secondDate),
    isBefore: dIsBefore(firstDate, secondDate),
    isSameOrAfter: dIsSameOrAfter(firstDate, secondDate),
    isSameOrBefore: dIsSameOrBefore(firstDate, secondDate)
})

console.groupEnd()
