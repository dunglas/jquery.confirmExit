# jQuery formNavigate Plugin

This jQuery plugin displays a modal dialog with a message asking the user to confirm if he wants to quit a webpage with unsaved changes.

Supported types of form's inputs are `text`, `textarea`, `password`, `radio`, `checkbox`, `file` and `select`.
Submitting the form will not display the confirmation dialog.
The displayed message is configurable.

Internally, this plugin use the `onbeforeunload` event.

Browser Compatibility:
- Internet Explorer 6+
- Firefox 2+
- Safari 3+
- Opera 9+
- Chrome 1+

## Usage

```js
$("#the-form").formNavigate("Your message");
```

- `the-form` is the form ID (works with any method to grab your form)
- `Your message` is the message that will be displayed before the page exit


## Version changes

### Version 1.2.0

Author: [Kévin Dunglas](http://dunglas.fr)

- jQuery 1.8 compatibility
- `select` inputs support
- Added a `package.json` file
- Migrated to GitHub

### Version 1.1

Author: [Law Ding Yong](http://code.google.com/p/jquery-plugin-form-navigation-confirmation/))

- Corrected bug that do not handle Back button navigation - Corrected textarea do not prompt confirmation in MAC. (thanks to kurund)