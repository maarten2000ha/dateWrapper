import moment from "moment";
import IWrapperInterface from "./IWrapperInterface";

export default class momentWrapper implements IWrapperInterface<moment.Moment> {
    date: moment.Moment;
    stringDate: string;

    constructor(date: string){
        this.date = moment.utc(date)
        this.stringDate = date
    }

    toDate() {
        return this.date.toDate();
    }

    toMoment(): moment.Moment {
        return this.date
    }

    add(duration) {
        const date = this.date.clone()
        return date.add(duration).toISOString()
    }

    subtract(duration) {
        const date = this.date.clone()
        return date.subtract(duration).toISOString();
    }

    startOfWeek() {
        const date = this.date.clone()
        return date.startOf("isoWeek").toISOString()
    }

    endOfWeek() {
        const date = this.date.clone()
        return date.endOf("isoWeek").toISOString()
    }

    isAfter(date: string) {
        return this.date.isAfter(date);
    }

    isBefore(date: string) {
        return this.date.isBefore(date);
    }

    isSameOrAfter(date: string) {
        return this.date.isSameOrAfter(date);
    }

    isSameOrBefore(date: string) {
        return this.date.isSameOrBefore(date);
    }

}
