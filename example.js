'use strict'

var inquirer = require('inquirer')

inquirer.registerPrompt('checkbox', require('./index'))

inquirer.prompt([{
  status: function (choices) {
    var selected = choices.where({ checked: true })
    var sum = selected.reduce(function (s, c) { return s + c.value }, 0)
    return 'Total = ' + sum
  },
  type: 'checkbox',
  name: 'addition',
  message: 'select number to add them',
  choices: [
    { name: 'one',   short: '1', value: 1, checked: true },
    { name: 'two',   short: '2', value: 2, checked: false },
    { name: 'three', short: '3', value: 3, checked: false },
    { name: 'four',  short: '4', value: 4, checked: true },
  ]
}])
.then(console.log)
.catch(console.error)
