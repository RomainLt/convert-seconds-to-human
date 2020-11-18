const test = require('ava')
const convert = require('../src/convert')

test('oneSecondDuration', t => {
  const res = convert(1, 'cal')
  const obj = {
    seconds: 1,
    minutes: 0,
    hours: 0,
    days: 0,
    years: 0
  }
  t.deepEqual(obj, res)
})

test('oneMinuteDuration', t => {
  const res = convert(60, 'cal')
  const obj = {
    seconds: 0,
    minutes: 1,
    hours: 0,
    days: 0,
    years: 0
  }
  t.deepEqual(obj, res)
})

test('oneHourDuration', t => {
  const res = convert(3600, 'cal')
  const obj = {
    seconds: 0,
    minutes: 0,
    hours: 1,
    days: 0,
    years: 0
  }
  t.deepEqual(obj, res)
})

test('oneDayDurationCal', t => {
  const res = convert(86400, 'cal')
  const obj = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 1,
    years: 0
  }
  t.deepEqual(obj, res)
})

test('oneYearDurationCal', t => {
  const res = convert(31536000, 'cal')
  const obj = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    years: 1
  }
  t.deepEqual(obj, res)
})

test('oneYearDurationAstr', t => {
  const res = convert(31557600, 'astr')
  const obj = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    years: 1
  }
  t.deepEqual(obj, res)
})

test('finalTestCal', t => {
  const res = convert(88888888, 'cal')
  const obj = {
    seconds: 28,
    minutes: 21,
    hours: 19,
    days: 298,
    years: 2
  }
  t.deepEqual(obj, res)
})

test('finalTestAstr', t => {
  const res = convert(88888888, 'astr')
  const obj = {
    seconds: 28,
    minutes: 21,
    hours: 7,
    days: 298,
    years: 2
  }
  t.deepEqual(obj, res)
})
