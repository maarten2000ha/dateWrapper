import MomentWrapper from "./MomentWrapper";
import DateFnsWrapper from "./DateFnsWrapper";


const MomentDateWrapper = new MomentWrapper("2011-10-05T14:48:00.000Z")
const secondMomentDate = new MomentWrapper("2021-06-03T07:30:00.000Z")


const DateFnsDateWrapper = new DateFnsWrapper("2011-10-05T14:48:00.000Z")
const secondDateFnsDate = new DateFnsWrapper("2021-06-03T07:30:00.000Z")

console.group("moment wrapper functions")

console.log({
    dateWrapper: MomentDateWrapper,
    toDate: MomentDateWrapper.toDate(),
    toMoment: MomentDateWrapper.toMoment(),
    add: MomentDateWrapper.add({"days": 1}),
    subtract: MomentDateWrapper.subtract({"days": 1}),
    startOfWeek: MomentDateWrapper.startOfWeek(),
    endOfWeek: MomentDateWrapper.endOfWeek(),
    secondDate: secondMomentDate,
    isAfter: MomentDateWrapper.isAfter(secondMomentDate.stringDate),
    isBefore: MomentDateWrapper.isBefore(secondMomentDate.stringDate),
    isSameOrAfter: MomentDateWrapper.isSameOrAfter(secondMomentDate.stringDate),
    isSameOrBefore: MomentDateWrapper.isSameOrBefore(secondMomentDate.stringDate)
})

console.groupEnd()

console.group("date-fns wrapper functions")

console.log({
    dateWrapper: DateFnsDateWrapper,
    toDate: DateFnsDateWrapper.toDate(),
    add: DateFnsDateWrapper.add({"days": 1}),
    subtract: DateFnsDateWrapper.subtract({"days": 1}),
    startOfWeek: DateFnsDateWrapper.startOfWeek(),
    endOfWeek: DateFnsDateWrapper.endOfWeek(),
    secondDate: secondDateFnsDate,
    isAfter: DateFnsDateWrapper.isAfter(secondDateFnsDate.stringDate),
    isBefore: DateFnsDateWrapper.isBefore(secondDateFnsDate.stringDate),
    isSameOrAfter: DateFnsDateWrapper.isSameOrAfter(secondDateFnsDate.stringDate),
    isSameOrBefore: DateFnsDateWrapper.isSameOrBefore(secondDateFnsDate.stringDate)
})

console.groupEnd()


