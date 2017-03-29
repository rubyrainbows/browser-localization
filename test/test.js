'use strict';

var expect = chai.expect;

function localizeNumber(locale, string, type) {
    var el = document.createElement('span');
    el.id = 'number';
    el.innerHTML = string;
    el.style.background = '#ccc';
    el.setAttribute('data-localized-number', '');
    el.setAttribute('data-localized-number-type', type);
    document.body.appendChild(el);

    var localizedNumber = new LocalizedNumber(locale);
    localizedNumber.automaticallyLocalizeNumbers();

    var localized = $('#number').text();
    document.body.removeChild(el);

    return localized;
}

describe('#numberLocalizer', function () {
    it('should convert to a localized number', function () {
        var localized = localizeNumber('en-US', '200.200');
        expect(localized).to.equal('200.2');
    });

    it('should convert to a localized number in thousands', function () {
        var localized = localizeNumber('en-US', '2000.200');
        expect(localized).to.equal('2,000.2');
    });

    it('should convert to a localized number in thousands in german', function () {
        var localized = localizeNumber('de-DE', '2000.200');
        expect(localized).to.equal('2.000,2');
    });

    it('should convert to a localized number within a string', function () {
        var localized = localizeNumber('en-US', 'foo 200.200 bar');
        expect(localized).to.equal('foo 200.2 bar');
    });

    it('should convert multiple localized numbers within a string', function () {
        var localized = localizeNumber('en-US', 'foo 200.200 300.02300 bar');
        expect(localized).to.equal('foo 200.2 300.023 bar');
    });

    it('should convert localized string to currency', function () {
        var localized = localizeNumber('en-US', 'foo $2000 $300.02300 bar', 'currency');
        expect(localized).to.equal('foo $2,000.00 $300.02 bar');
    });

    it('should convert localized string to currency in german', function () {
        var localized = localizeNumber('de-DE', 'foo $2000 $300.02300 bar', 'currency');
        expect(localized).to.equal('foo $2.000,00 $300,02 bar');
    });

    it('should not convert anything if there are no numbers', function () {
        var localized = localizeNumber('de-DE', 'foo bar');
        expect(localized).to.equal('foo bar');
    });
});