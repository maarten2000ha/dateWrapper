import IWrapperInterface from "./IWrapperInterface"
import config from "./config"
import momentWrapper from "./MomentWrapper";
import DateFnsWrapper from "./DateFnsWrapper";

const enum WRAPPERTYPE {
    "MOMENT" = "moment",
    "DATEFNS" = "datefns"
}

export default class dateWrapper implements IWrapperInterface<any> {
    private wrapper: IWrapperInterface<any> = null

    constructor(date: string) {
        switch (config.DATEWRAPPER) {
            case WRAPPERTYPE.MOMENT:
                this.wrapper = new momentWrapper(date)
                break
            case WRAPPERTYPE.DATEFNS:
                this.wrapper = new DateFnsWrapper(date)
                break
            default:
                throw new Error("Config should be filled in")
        }
    }

    date: any;
    stringDate: String;

    toDate(): Date {
        return this.wrapper.toDate()
    }

    add(duration): String {
        return this.wrapper.add(duration);
    }

    subtract(duration): String {
        return this.wrapper.subtract(duration);
    }

    startOfWeek(): String {
        return this.wrapper.startOfWeek();
    }

    endOfWeek(): String {
        return this.wrapper.endOfWeek();
    }

    isAfter(date: String): boolean {
        return this.wrapper.isAfter(date);
    }

    isBefore(date: String): boolean {
        return this.wrapper.isBefore(date);
    }

    isSameOrAfter(date: String): boolean {
        return this.wrapper.isSameOrAfter(date);
    }

    isSameOrBefore(date: String): boolean {
        return this.wrapper.isSameOrBefore(date);
    }

}
