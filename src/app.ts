import MomentWrapper from "./MomentWrapper";


const dateWrapper = new MomentWrapper("2011-10-05T14:48:00.000Z")
const secondDate = new MomentWrapper("2021-06-03T07:30:00.000Z")

console.group("momentWrapper functions")

console.log({
    dateWrapper,
    toDate: dateWrapper.toDate(),
    toMoment: dateWrapper.toMoment(),
    add: dateWrapper.add(1, "days"),
    subtract: dateWrapper.subtract(1, "days"),
    startOfWeek: dateWrapper.startOfWeek(),
    endOfWeek: dateWrapper.endOfWeek(),
    secondDate,
    isAfter: dateWrapper.isAfter(secondDate.stringDate),
    isBefore: dateWrapper.isBefore(secondDate.stringDate),
    isSameOrAfter: dateWrapper.isSameOrAfter(secondDate.stringDate),
    isSameOrBefore: dateWrapper.isSameOrBefore(secondDate.stringDate)
})

console.groupEnd()
