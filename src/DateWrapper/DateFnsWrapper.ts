import {
    add as dateAdd,
    endOfISOWeek,
    format,
    isAfter as dateIsAfter,
    isBefore as dateIsBefore,
    isSameSecond,
    isValid as dateIsValid,
    setHours,
    setMilliseconds,
    setMinutes,
    setSeconds,
    startOfISOWeek,
    sub
} from "date-fns"
import {zonedTimeToUtc} from "date-fns-tz"
import {TDuration} from "./types";

/**
 *  converts date from your timezone to utc
 *
 * @param {Date} date
 * @returns {Date}
 */
const getUtcDate = (date: Date): Date => {
    return zonedTimeToUtc(date, "utc")
}

/**
 * converts time into a date object
 *
 * @param {string} time
 * @param {boolean} setToUtc
 * @returns {Date}
 */
export const timeToDate = (time: string, setToUtc: boolean = true): Date => {
    if (isValidTime(time)) throw new Error("Invalid Time")
    const today = new Date()
    let date = setHours(today, Number(time.substring(0, 2)))
    date = setMinutes(date, Number(time.substring(3, 5)))
    date = setSeconds(date, 0)
    date = setMilliseconds(date, 0)
    if (setToUtc) date = getUtcDate(date)
    return date
}

/**
 * creates Date from (iso) string
 *
 * @param {string} date
 * @returns {Date}
 */
export const toDate = (date: string): Date => {
    return new Date(date);
}

/**
 * adds duration to date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const add = (date: string, duration: TDuration): string => {
    const dateObj = new Date(date)
    return dateAdd(dateObj, duration).toISOString()
}

/**
 * adds duration to time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const addTime = (time: string, duration: TDuration): string => {
    const date = timeToDate(time, false)
    const addedDate = dateAdd(date, duration)
    return format(addedDate, "HH:mm")
}

/**
 * subtracts duration from date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtract = (date: string, duration: TDuration): string => {
    const dateObj = new Date(date)
    return sub(dateObj, duration).toISOString()
}

/**
 * subtracts duration from time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtractTime = (time: string, duration: TDuration): string => {
    const date = timeToDate(time, false)
    const subtractedDate = sub(date, duration)
    return format(subtractedDate, "HH:mm")
}

/**
 * returns the very start of the week (Monday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const startOfWeek = (date: string): string => {
    const dateObj = new Date(date)
    return getUtcDate(startOfISOWeek(dateObj)).toISOString()
}

/**
 * returns the very end of the week (Sunday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const endOfWeek = (date: string): string => {
    const dateObj = new Date(date)
    return getUtcDate(endOfISOWeek(dateObj)).toISOString()
}

/**
 * checks if first given ISO string is after the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isAfter = (firstDate: string, secondDate: string): boolean => {
    const firstDateObj = new Date(firstDate)
    const secondDateObj = new Date(secondDate)
    return dateIsAfter(firstDateObj, secondDateObj)
}

/**
 * checks if first given ISO string is before the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isBefore = (firstDate: string, secondDate: string): boolean => {
    const firstDateObj = new Date(firstDate)
    const secondDateObj = new Date(secondDate)
    return dateIsBefore(firstDateObj, secondDateObj)
}

/**
 * checks if first given ISO string is the same or later than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isSameOrAfter = (firstDate: string, secondDate: string): boolean => {
    const firstDateObj = new Date(firstDate)
    const secondDateObj = new Date(secondDate)
    return isSameSecond(firstDateObj, secondDateObj) || dateIsAfter(firstDateObj, secondDateObj)
}

/**
 * checks if first given ISO string is hte same or before than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isSameOrBefore = (firstDate: string, secondDate: string): boolean => {
    const firstDateObj = new Date(firstDate)
    const secondDateObj = new Date(secondDate)
    return isSameSecond(firstDateObj, secondDateObj) || dateIsBefore(firstDateObj, secondDateObj)
}

/**
 * checks if  ISO string is valid
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isValid = (date: string): boolean => {
    const dateObj = new Date(date)
    return dateIsValid(dateObj)
}

/**
 * checks if time is valid
 *
 * @param {string} time
 * @returns {boolean}
 */
export const isValidTime = (time: string): boolean => {
    const today = new Date()
    const hours = Number(time.substring(0, 2))
    const minutes = Number(time.substring(3, 5))
    if ((hours > 0 && hours < 23 || hours == 24 && minutes === 0) && (minutes < 60 && minutes > 0)) {
        let date = setHours(today, hours)
        date = setMinutes(date, minutes)
        return dateIsValid(date)
    }
    return false
}
