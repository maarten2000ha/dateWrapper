import moment, {Moment} from "moment"
import {TDuration} from "./types";

/**
 * converts time into a date object
 *
 * @param {string} time
 * @param {boolean} setToUtc
 * @returns {Date}
 */
export const timeToDate = (time: string): Date => {
    const date = moment.utc(time, "HH:mm").toDate()
    if (!isValid(date.toISOString())){
        throw new Error(`${time} is invalid`)
    }
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
 * creates Moment object from (iso) string
 *
 * @param {string} date
 * @returns {Moment}
 */
export const toMoment = (date: string): Moment => {
    return moment.utc(date)
}

/**
 * adds duration to date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const add = (date: string, duration: TDuration): string => {
    return moment.utc(date).add(duration).toISOString()
}

/**
 * adds duration to time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const addTime = (time: string, duration: TDuration): string => {
    return moment.utc(time, "HH:mm").add(duration).format("HH:mm")
}

/**
 * subtracts duration from date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtract = (date: string, duration: TDuration): string => {
    return moment.utc(date).subtract(duration).toISOString();
}

/**
 * subtracts duration from time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtractTime = (time: string, duration: TDuration): string => {
    return moment.utc(time, "HH:mm").subtract(duration).format("HH:mm")
}

/**
 * returns the very start of the week (Monday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const startOfWeek = (date: string): string => {
    return moment.utc(date).startOf("isoWeek").toISOString()
}

/**
 * returns the very end of the week (Sunday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const endOfWeek = (date: string): string => {
    return moment.utc(date).endOf("isoWeek").toISOString()
}

/**
 * checks if first given ISO string is after the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isAfter = (firstDate: string, secondDate: string): boolean => {
    return moment.utc(firstDate).isAfter(secondDate);
}

/**
 * checks if first given ISO string is before the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isBefore = (firstDate: string, secondDate: string): boolean => {
    return moment.utc(firstDate).isBefore(secondDate);
}

/**
 * checks if first given ISO string is the same or later than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isSameOrAfter = (firstDate: string, secondDate: string): boolean => {
    return moment.utc(firstDate).isSameOrAfter(secondDate);
}

/**
 * checks if first given ISO string is hte same or before than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {boolean}
 */
export const isSameOrBefore = (firstDate: string, secondDate: string): boolean => {
    return moment.utc(firstDate).isSameOrBefore(secondDate);
}

/**
 * checks if  ISO string is valid
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isValid = (date: string): boolean => {
    return moment.utc(date).isValid()
}

/**
 * checks if time is valid
 *
 * @param {string} time
 * @returns {boolean}
 */
export const isValidTime = (time: string): boolean => {
    return moment.utc(time, "HH:mm").isValid()
}
