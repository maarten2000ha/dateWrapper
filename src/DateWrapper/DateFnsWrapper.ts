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

/**
 *  converts date from your timezone to utc
 *
 * @param {Date} date
 * @returns {Date}
 */
const getUtcDate = (date) => {
    return zonedTimeToUtc(date, "utc")
}

/**
 * converts time into a date object
 *
 * @param {string} time
 * @param {boolean} setToUtc
 * @returns {Date}
 */
export const timeToDate = (time, setToUtc = true) => {
    if (isValidTime(time)) throw new Error("Invalid Time")
    const today = new Date()
    let date = setHours(today, time.substring(0, 2))
    date = setMinutes(date, time.substring(3, 5))
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
export const toDate = (date) => {
    return new Date(date);
}

/**
 * adds duration to date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const add = (date, duration) => {
    date = new Date(date)
    return dateAdd(date, duration).toISOString()
}

/**
 * adds duration to time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const addTime = (time, duration) => {
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
export const subtract = (date, duration) => {
    date = new Date(date)
    return sub(date, duration).toISOString()
}

/**
 * subtracts duration from time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtractTime = (time, duration) => {
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
export const startOfWeek = (date) => {
    date = new Date(date)
    return getUtcDate(startOfISOWeek(date)).toISOString()
}

/**
 * returns the very end of the week (Sunday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const endOfWeek = (date) => {
    date = new Date(date)
    return getUtcDate(endOfISOWeek(date)).toISOString()
}

/**
 * checks if first given ISO string is after the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isAfter = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsAfter(firstDate, secondDate)
}

/**
 * checks if first given ISO string is before the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isBefore = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsBefore(firstDate, secondDate)
}

/**
 * checks if first given ISO string is the same or later than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isSameOrAfter = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return isSameSecond(firstDate, secondDate) || dateIsAfter(firstDate, secondDate)
}

/**
 * checks if first given ISO string is hte same or before than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isSameOrBefore = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return isSameSecond(firstDate, secondDate) || dateIsBefore(firstDate, secondDate)
}

/**
 * checks if  ISO string is valid
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isValid = (date) => {
    date = new Date(date)
    return dateIsValid(date)
}

/**
 * checks if time is valid
 *
 * @param {string} time
 * @returns {boolean}
 */
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
