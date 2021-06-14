export default interface IWrapperInterface<Type> {
    date: Type
    stringDate: String

    toString(): String
    startOfWeek(): String
    endOfWeek(): String
    add(duration): String     //format might be changed to an enum
    subtract(duration): String
    toDate(): Date
    isSameOrBefore(date: String): boolean
    isSameOrAfter(date: String): boolean
    isBefore(date: String): boolean
    isAfter(date: String): boolean

}


