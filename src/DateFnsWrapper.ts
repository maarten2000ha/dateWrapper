import {
    add as dateAdd,
    endOfISOWeek,
    format,
    isAfter as dateIsAfter,
    isBefore as dateIsBefore,
    isSameSecond,
    isValid as dateIsValid,
    setHours,
    setMinutes,
    startOfISOWeek,
    sub
} from "date-fns"
import {zonedTimeToUtc} from "date-fns-tz"

const getUtcDate = (date) => {
    return zonedTimeToUtc(date, "utc")
}

export const toDate = (date) => {
    return new Date(date);
}

export const add = (date, duration) => {
    date = new Date(date)
    return dateAdd(date, duration).toISOString()
}

export const addTime = (time, duration) => {
    if (isValidTime(time)) throw new Error("Invalid Time")
    const today = new Date()
    let date = setHours(today, time.substring(0, 2))
    date = setMinutes(date, time.substring(3, 5))
    return format(dateAdd(date, duration), "HH:mm")
}

export const subtract = (date, duration) => {
    date = new Date(date)
    return sub(date, duration).toISOString()
}

export const subtractTime = (time, duration) => {
    if (isValidTime(time)) throw new Error("Invalid Time")
    const today = new Date()
    let date = setHours(today, time.substring(0, 2))
    date = setMinutes(date, time.substring(3, 5))
    return format(sub(date, duration), "HH:mm")
}

export const startOfWeek = (date) => {
    date = new Date(date)
    return getUtcDate(startOfISOWeek(date)).toISOString()
}

export const endOfWeek = (date) => {
    date = new Date(date)
    return getUtcDate(endOfISOWeek(date)).toISOString()
}

export const isAfter = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsAfter(firstDate, secondDate)
}

export const isBefore = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsBefore(firstDate, secondDate)
}

export const isSameOrAfter = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return isSameSecond(firstDate, secondDate) || dateIsAfter(firstDate, secondDate)
}

export const isSameOrBefore = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return isSameSecond(firstDate, secondDate) || dateIsBefore(firstDate, secondDate)
}

export const isValid = (date) => {
    date = new Date(date)
    return dateIsValid(date)
}

export const isValidTime = (time) => {
    const today = new Date()
    const hours = time.substring(0, 2)
    const minutes = time.substring(3, 5)
    if ((hours > 0 && hours < 23 || hours == '24' && minutes === '00') && (minutes < 60 && minutes > 0)) {
        let date = setHours(today, time.substring(0, 2))
        date = setMinutes(date, time.substring(3, 5))
        return dateIsValid(date)
    }
    return false
}
