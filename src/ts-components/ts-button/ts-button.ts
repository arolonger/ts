interface ITSButton {
    text: string;
}

class TSButton {
    text: KnockoutObservable<string>;
    date: string;
    
    constructor (params: ITSButton) {
        this.text = ko.observable(params.text);

        this.date = moment().format("DD-MM-YYYY");
    }
}