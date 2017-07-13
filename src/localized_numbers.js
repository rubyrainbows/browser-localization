'use strict';

class LocalizedNumber {

    /**
     * Constructs the instance of the LocalizedNumber
     *
     * @param locale The locale to localize to. If left blank, it will default to browser locale
     */
    constructor(locale) {
        this.locale = (locale !== undefined) ? locale : ((navigator.language) ? navigator.language : navigator.userLanguage);
    }

    /**
     * Localizes all html blocks with data tag of data-localized-number
     */
    automaticallyLocalizeNumbers() {
        $("[data-localized-number]").each(function (key, value) {
            let element = $(value);
            let type = element.data('localized-number-type');
            let numberString = this.localizeNumbers(element.text(), type);

            element.text(numberString);
        }.bind(this));
    }

    /**
     * Localize a number string
     *
     * @param text the text to convert
     * @param type the type
     *
     * @returns string
     */
    localizeNumbers(text, type) {
        let options = {};

        switch (type) {
            case 'currency':
                options['minimumFractionDigits'] = 2;
                options['maximumFractionDigits'] = 2;
                break;
            default:
                break;
        }

        return text.replace(/([0-9]*[.,][0-9]+|[0-9]+)/g, function (match, p1) {
            return parseFloat(p1).toLocaleString(this.locale, options);
        }.bind(this));
    }
}

window.LocalizedNumber = LocalizedNumber;
