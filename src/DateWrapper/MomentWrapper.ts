import moment from "moment"

/**
 * converts time into a date object
 *
 * @param {string} time
 * @param {boolean} setToUtc
 * @returns {Date}
 */
export const timeToDate = (time) => {
    const date = moment.utc(time, "HH:mm").toDate()
    if (!isValid(date)){
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
export const toDate = (date) => {
    return new Date(date);
}

/**
 * creates Moment object from (iso) string
 *
 * @param date
 * @returns {moment}
 */
export const toMoment = (date) => {
    return moment.utc(date)
}

/**
 * adds duration to date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const add = (date, duration) => {
    return moment.utc(date).add(duration).toISOString()
}

/**
 * adds duration to time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const addTime = (time, duration) => {
    return moment.utc(time, "HH:mm").add(duration).format("HH:mm")
}

/**
 * subtracts duration from date
 *
 * @param {string} date
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtract = (date, duration) => {
    return moment.utc(date).subtract(duration).toISOString();
}

/**
 * subtracts duration from time
 *
 * @param {string} time
 * @param {object} duration
 * @returns {string} ISO string
 */
export const subtractTime = (time, duration) => {
    return moment.utc(time, "HH:mm").subtract(duration).format("HH:mm")
}

/**
 * returns the very start of the week (Monday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const startOfWeek = (date) => {
    return moment.utc(date).startOf("isoWeek").toISOString()
}

/**
 * returns the very end of the week (Sunday)
 *
 * @param {string} date
 * @returns {string} ISO string
 */
export const endOfWeek = (date) => {
    return moment.utc(date).endOf("isoWeek").toISOString()
}

/**
 * checks if first given ISO string is after the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isAfter = (firstDate, secondDate) => {
    return moment.utc(firstDate).isAfter(secondDate);
}

/**
 * checks if first given ISO string is before the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isBefore = (firstDate, secondDate) => {
    return moment.utc(firstDate).isBefore(secondDate);
}

/**
 * checks if first given ISO string is the same or later than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isSameOrAfter = (firstDate, secondDate) => {
    return moment.utc(firstDate).isSameOrAfter(secondDate);
}

/**
 * checks if first given ISO string is hte same or before than the second ISO string
 *
 * @param {string} firstDate
 * @param {string} SecondDate
 * @returns {boolean}
 */
export const isSameOrBefore = (firstDate, secondDate) => {
    return moment.utc(firstDate).isSameOrBefore(secondDate);
}

/**
 * checks if  ISO string is valid
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isValid = (date) => {
    return moment.utc(date).isValid()
}

/**
 * checks if time is valid
 *
 * @param {string} time
 * @returns {boolean}
 */
export const isValidTime = (time) => {
    return moment.utc(time, "HH:mm").isValid()
}
