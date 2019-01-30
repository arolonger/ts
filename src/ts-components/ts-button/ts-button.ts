class TSButton {
    text: KnockoutObservable<string>;
    
    constructor () {
        this.text = ko.observable("TSButton text");
    }
}