import moment from "moment";

export const toDate = (date) => {
    return new Date(date);
}

export const toMoment = (date) => {
    return moment.utc(date)
}

export const add = (date, duration) => {
    return moment.utc(date).add(duration).toISOString()
}

export const subtract = (date, duration) => {
    return moment.utc(date).subtract(duration).toISOString();
}

export const startOfWeek = (date) => {
    return moment.utc(date).startOf("isoWeek").toISOString()
}

export const endOfWeek = (date) => {
    return moment.utc(date).endOf("isoWeek").toISOString()
}

export const isAfter = (firstDate, secondDate) => {
    return moment.utc(firstDate).isAfter(secondDate);
}

export const isBefore = (firstDate, secondDate) => {
    return moment.utc(firstDate).isBefore(secondDate);
}

export const isSameOrAfter = (firstDate, secondDate) => {
    return moment.utc(firstDate).isSameOrAfter(secondDate);
}

export const isSameOrBefore = (firstDate, secondDate) => {
    return moment.utc(firstDate).isSameOrBefore(secondDate);
}
