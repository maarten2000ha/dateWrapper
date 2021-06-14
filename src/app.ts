import dateWrapper from "./DateWrapper";


const DateWrapper = new dateWrapper("2011-10-05T14:48:00.000Z")
const secondDateWrapper = new dateWrapper("2021-06-03T07:30:00.000Z")

console.group("moment wrapper functions")

console.log({
    dateWrapper: DateWrapper,
    toDate: DateWrapper.toDate(),
    // toMoment: DateWrapper.toMoment(),
    startOfWeek: DateWrapper.startOfWeek(),
    endOfWeek: DateWrapper.endOfWeek(),
    add: DateWrapper.add({"days": 1}),
    subtract: DateWrapper.subtract({"days": 1}),
    secondDate: secondDateWrapper,
    isAfter: DateWrapper.isAfter(secondDateWrapper.stringDate),
    isBefore: DateWrapper.isBefore(secondDateWrapper.stringDate),
    isSameOrAfter: DateWrapper.isSameOrAfter(secondDateWrapper.stringDate),
    isSameOrBefore: DateWrapper.isSameOrBefore(secondDateWrapper.stringDate)
})

console.groupEnd()


