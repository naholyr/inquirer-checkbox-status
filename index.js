'use strict'

var Checkbox = require('inquirer/lib/prompts/checkbox')
var chalk = require('chalk')
var figures = require('figures')
var util = require('util')

var defaultStatus = function () { return '' }

function Prompt () {
  Checkbox.apply(this, arguments)
  // Bottom info updater
  if (!this.opt.status) {
    this.opt.status = defaultStatus
  }
  this._bottomInfo = this.opt.status(this.opt.choices)
  // Monkey-patch screen.render to display information on bottom instead of only an error
  var _render = this.screen.render.bind(this.screen)
  var self = this
  this.screen.render = function (message, bottomContent) {
    if (!bottomContent && self._bottomInfo) {
      bottomContent = Prompt.statusPrefix + self._bottomInfo
    }
    _render(message, bottomContent)
  }
}

util.inherits(Prompt, Checkbox)

Prompt.prototype.toggleChoice = function () {
  Checkbox.prototype.toggleChoice.apply(this, arguments)
  this._bottomInfo = this.opt.status(this.opt.choices)
}

Prompt.statusPrefix = chalk.cyan(figures.pointerSmall + figures.pointerSmall) + ' '

module.exports = Prompt
