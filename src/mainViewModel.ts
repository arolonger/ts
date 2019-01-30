class Main {
    text: KnockoutObservable<string>;
    tsButtonText: KnockoutObservable<string>;
    jsButtonText: KnockoutObservable<string>;
    jsButtonCommonText: KnockoutObservable<string>;
    tsButtonDate: string;
    tsButton: TSButton;
    componentButtonConfiguration: TSButton;
    componentButtonConfiguration2: TSButton;
    jsButton: JSButton;

    constructor () {
        this.text = ko.observable("Main text");

        this.tsButton = new TSButton({
            text: "TSButton text"
        });
        this.tsButtonText = this.tsButton.text;
        this.tsButtonDate = this.tsButton.date;
        
        this.jsButton = new JSButton();
        this.jsButtonText = this.jsButton.text;
        this.jsButtonCommonText = this.jsButton.common.text;

        this.componentButtonConfiguration = new TSButton({
            text: "aa"
        });

        this.componentButtonConfiguration2 = new TSButton({
            text: "bb"
        });

        ko.components.register("mnbutton", {
            viewModel: (params) => params.instance,
            template: `<button data-bind="text: text"></button>`
        });
    }
}

ko.applyBindings(new Main());