'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalizedNumber = function () {

    /**
     * Constructs the instance of the LocalizedNumber
     *
     * @param locale The locale to localize to. If left blank, it will default to browser locale
     */
    function LocalizedNumber(locale) {
        _classCallCheck(this, LocalizedNumber);

        this.locale = locale !== undefined ? locale : navigator.language ? navigator.language : navigator.userLanguage;
    }

    /**
     * Localizes all html blocks with data tag of data-localized-number
     */


    _createClass(LocalizedNumber, [{
        key: 'automaticallyLocalizeNumbers',
        value: function automaticallyLocalizeNumbers() {
            $("[data-localized-number]").each(function (key, value) {
                var element = $(value);
                var type = element.data('localized-number-type');
                var numberString = this.localizeNumbers(element.text(), type);

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

    }, {
        key: 'localizeNumbers',
        value: function localizeNumbers(text, type) {
            var options = {};

            switch (type) {
                case 'currency':
                    options['minimumFractionDigits'] = 2;
                    options['maximumFractionDigits'] = 2;
                    break;
                default:
                    break;
            }

            return text.replace(/([0-9.,]+)/g, function (match, p1) {
                return parseFloat(p1).toLocaleString(this.locale, options);
            }.bind(this));
        }
    }]);

    return LocalizedNumber;
}();

window.LocalizedNumber = LocalizedNumber;