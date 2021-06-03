import {add as dateAdd, formatISO, sub, startOfISOWeek, endOfISOWeek, isAfter as dateIsAfter, isBefore as dateIsBefore, isSameSecond} from "date-fns";

export const toDate = (date) => {
    return new Date(date);
}

export const add = (date, duration) => {
    date = new Date(date)
    return formatISO(dateAdd(date, duration))
}

export const subtract = (date, duration) => {
    date = new Date(date)
    return formatISO(sub(date, duration))
}

export const startOfWeek = (date) => {
    date = new Date(date)
    return formatISO(startOfISOWeek(date))
}

export const endOfWeek = (date) => {
    date = new Date(date)
    return formatISO(endOfISOWeek(date))
}

export const isAfter = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsAfter(firstDate, secondDate)
}

export const isBefore = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    return dateIsAfter(firstDate, secondDate)
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
