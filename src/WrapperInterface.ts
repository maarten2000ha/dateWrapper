export default interface WrapperInterface<Type> {
    date: Type
    stringDate: String

    toString(): String
    startOfWeek(): String
    endOfWeek(): String
    add(amount: number, format: string): String     //format might be changed to an enum
    subtract(amount: number, format: string): String
    toDate(): Date
    isSameOrBefore(date: String): boolean
    isSameOrAfter(date: String): boolean
    isBefore(date: String): boolean
    isAfter(date: String): boolean

}


