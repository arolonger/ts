class Main {
    text: KnockoutObservable<string>;
    tsButtonText: KnockoutObservable<string>;
    jsButtonText: KnockoutObservable<string>;
    jsButtonCommonText: KnockoutObservable<string>;
    tsButtonDate: string;

    constructor () {
        this.text = ko.observable("Main text");

        this.tsButtonText = new TSButton().text;
        this.tsButtonDate = new TSButton().date;

        this.jsButtonText = new JSButton().text;
        this.jsButtonCommonText = new JSButton().common.text;
    }
}

ko.applyBindings(new Main());