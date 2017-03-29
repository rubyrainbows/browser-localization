# Browser Localization

[![Build Status](https://travis-ci.org/rubyrainbows/browser-localization.svg?branch=master)](https://travis-ci.org/rubyrainbows/browser-localization)
[![npm version](https://badge.fury.io/js/%40rubyrainbows%2Fbrowser-localization.svg)](https://badge.fury.io/js/%40rubyrainbows%2Fbrowser-localization)

Browser Localization is a library to help localize aspects of a website on the browser.

## Setup

**Notes:**
* The jQuery library is required
* The compiled versions for this library are under the directory `dist`.

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/localized_numbers.js"></script>
```

## Localized Numbers

The LocalizedNumbers library will automatically localize the numbers of any HTML element with the data tag of `data-localized-number`.

**Notes:**
* A locale such as `en-US` can be supplied to LocalizedNumber, but otherwise, it will default to the browser locale.

### Example for English Locale

```html
...
<span data-localized-number>2000</span>
<span data-localized-number>2000.2</span>
<script>
    $( document ).ready(function() {
        var localizedNumber = new LocalizedNumber('en-US');
        localizedNumber.automaticallyLocalizeNumbers();
    });
</script>
...
```

```html
<span data-localized-number>2,000</span>
<span data-localized-number>2,000.2</span>
```

### Example for German Locale

```html
...
<span data-localized-number>2000</span>
<span data-localized-number>2000.2</span>
<script>
    $( document ).ready(function() {
        var localizedNumber = new LocalizedNumber('de-DE');
        localizedNumber.automaticallyLocalizeNumbers();
    });
</script>
...
```

```html
<span data-localized-number>2.000</span>
<span data-localized-number>2.000,2</span>
```

### Currency

If the data tag `data-localized-number-type` is set with the value currency, the number will be given two decimal places.

```html
...
<span data-localized-number data-localized-number-type="currency">2000</span>
<span data-localized-number data-localized-number-type="currency">2000.2</span>
<script>
    $( document ).ready(function() {
        var localizedNumber = new LocalizedNumber('de-DE');
        localizedNumber.automaticallyLocalizeNumbers();
    });
</script>
...
```

```html
<span data-localized-number data-localized-number-type="currency">2.000,00</span>
<span data-localized-number data-localized-number-type="currency">2.000,20</span>
```
