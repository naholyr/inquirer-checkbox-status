# inquirer-checkbox-status

Checkbox prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js) with live custom status info about current selection. I had a really hard time using `BottomBar` for this usage with standard `checkbox` prompt so I extended it to re-use the live bottom space used to display validation errors.

## Installation

```
npm install --save inquirer-checkbox-status
```

## Usage

This prompt is fully compatible with `checkbox`, so you can overwrite it with this prompt, or use any other name that's up to you.

```javascript
inquirer.registerPrompt('checkbox', require('inquirer-autocomplete-prompt'));
inquirer.prompt({
  type: 'checkbox',
  ...
})
```

### Options

All options expected by `checkbox` core prompt are expected too and will have same effect, as `checkbox-status` just extends it. A new option can be specified:

`status`

**status** is a function called on initial rendering, and each time a choice is toggled. It **must** return a string. Whenever it returns a non-empty string, this result will be used to display a status message at bottom. If an error was meant to be displayed, your status will be hidden.

#### Example

```javascript
inquirer.registerPrompt('checkbox', require('./index'))
inquirer.prompt([{
  type: 'checkbox',
  status: function (choices) {
    return 'Total = ' + _.sum(_.map(choices.where({ checked: true }), 'value'))
  },
  name: 'addition',
  message: 'select numbers',
  choices: [
    { name: 'one',   short: '1', value: 1, checked: true },
    { name: 'two',   short: '2', value: 2, checked: false },
    { name: 'three', short: '3', value: 3, checked: false },
    { name: 'four',  short: '4', value: 4, checked: true },
  ]
}])
```

See also [example.js](./example.js) for a working example.

[![asciicast](https://asciinema.org/a/04azado82zaooa4xavet9m3qt.png)](https://asciinema.org/a/04azado82zaooa4xavet9m3qt)

## License

MIT
