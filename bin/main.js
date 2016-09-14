#!/usr/bin/env node

"use strict"

const cordlr = require('../lib');
const minimist = require('minimist');
const rc = require('rc');
const log = require('log-cb');
const path = require('path');
const userConfig = require('../config');

/**
 * Create bot using command line.
 */

// Get options and set defaults
const options = rc('cordlr', {
  actions: path.join(__dirname, '../lib/actions'),
  prefix: '$',
  token: process.env.BOT_TOKEN
});

// Create bot.
const bot = cordlr(options);

// Log done message.
bot.on('done', log('Loaded and authenticated the bot.'));
