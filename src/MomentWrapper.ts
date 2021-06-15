import moment from "moment"

export const toDate = (date) => {
    return new Date(date);
}

export const toMoment = (date) => {
    return moment.utc(date)
}

export const add = (date, duration) => {
    return moment.utc(date).add(duration).toISOString()
}

export const addTime = (time, duration) => {
    return moment.utc(time, "HH:mm").add(duration).format("HH:mm")
}

export const subtract = (date, duration) => {
    return moment.utc(date).subtract(duration).toISOString();
}

export const subtractTime = (time, duration) => {
    return moment.utc(time, "HH:mm").subtract(duration).format("HH:mm")
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

export const isValid = (date) => {
    return moment.utc(date).isValid()
}

export const isValidTime = (time) => {
    return moment.utc(time, "HH:mm").isValid()
}
