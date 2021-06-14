import { add as dateAdd, formatISO, sub, startOfISOWeek, endOfISOWeek, isAfter as dateIsAfter, isBefore as dateIsBefore, isSameSecond} from "date-fns"
import IWrapperInterface from "./IWrapperInterface"

export default class DateFnsWrapper implements IWrapperInterface<Date> {
    date: Date
    stringDate: string

    constructor(date: string){
        this.date = new Date(date)
        this.stringDate = date
    }

    toDate(): Date {
        return this.date
    }

    add(duration): string {
        return formatISO(dateAdd(this.date, duration))
    }

    subtract(duration): string {
        return formatISO(sub(this.date, duration))
    }

    startOfWeek(): string {
        return formatISO(startOfISOWeek(this.date))
    }

    endOfWeek(): string {
        return formatISO(endOfISOWeek(this.date))
    }

    isAfter(date: string): boolean {
        const secondDate = new Date(date)
        return dateIsAfter(this.date, secondDate)
    }

    isBefore(date: string): boolean {
        const secondDate = new Date(date)
        return dateIsBefore(this.date, secondDate)
    }

    isSameOrAfter(date: string): boolean {
        const secondDate = new Date(date)
        return isSameSecond(this.date, secondDate) || dateIsAfter(this.date, secondDate)
    }

    isSameOrBefore(date: string): boolean {
        const secondDate = new Date(date)
        return isSameSecond(this.date, secondDate) || dateIsBefore(this.date, secondDate)
    }

}
