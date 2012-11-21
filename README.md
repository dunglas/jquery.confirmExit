# jQuery confirmExit Plugin

This jQuery plugin displays a modal dialog with a message asking the user to confirm if he wants to quit a webpage with unsaved changes.

All form's controls are supported including HTML5 types.
Submitting the form will not display the confirmation dialog.
The displayed message is configurable.

Internally, this plugin use the `onbeforeunload` event.

Browser Compatibility: IE 6.0+, FF 10+, Safari 5.0+, Opera, Chrome

## Usage

```js
$("#the-form").confirmExit("Your message");
```

- `the-form` is the form ID (works with any method to grab your form)
- `Your message` is the message that will be displayed before the page exit