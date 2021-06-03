import moment from "moment";
import WrapperInterface from "./WrapperInterface";

export default class momentWrapper implements WrapperInterface<moment.Moment> {
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
        return this.date.add(duration).toISOString()
    }

    subtract(duration) {
        return this.date.add(duration).toISOString();
    }

    startOfWeek() {
        return this.date.startOf("isoWeek").toISOString()
    }

    endOfWeek() {
        return this.date.endOf("isoWeek").toISOString()
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
