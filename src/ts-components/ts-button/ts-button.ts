class TSButton {
    text: KnockoutObservable<string>;
    date: string;
    
    constructor () {
        this.text = ko.observable("TSButton text");
        this.date = moment().format("DD-MM-YYYY");
    }
}