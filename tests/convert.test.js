const test = require('ava')
const convert = require('../src/convert')

test('one second', t => {
  const res = convert(1, 'cal')
  const obj = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1
  }
  t.deepEqual(obj, res)
})

test('one minute', t => {
  const res = convert(60, 'cal')
  const obj = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0
  }
  t.deepEqual(obj, res)
})

test('one minute and one second', t => {
  const res = convert(61, 'cal')
  const obj = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 1
  }
  t.deepEqual(obj, res)
})

test('one hour', t => {
  const res = convert(3600, 'cal')
  const obj = {
    years: 0,
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 0
  }
  t.deepEqual(obj, res)
})

test('one hour and one second', t => {
  const res = convert(3601, 'cal')
  const obj = {
    years: 0,
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 1
  }
  t.deepEqual(obj, res)
})

test('one day', t => {
  const res = convert(86400, 'cal')
  const obj = {
    years: 0,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  t.deepEqual(obj, res)
})

test('one day and one second', t => {
  const res = convert(86401, 'cal')
  const obj = {
    years: 0,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 1
  }
  t.deepEqual(obj, res)
})

test('one year (cal)', t => {
  const res = convert(31536000, 'cal')
  const obj = {
    years: 1,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  t.deepEqual(obj, res)
})

test('one year (astr)', t => {
  const res = convert(31557600, 'astr')
  const obj = {
    years: 1,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  t.deepEqual(obj, res)
})

test('final test (cal)', t => {
  const res = convert(88888888, 'cal')
  const obj = {
    years: 2,
    days: 298,
    hours: 19,
    minutes: 21,
    seconds: 28
  }
  t.deepEqual(obj, res)
})

test('final test (astr)', t => {
  const res = convert(88888888, 'astr')
  const obj = {
    years: 2,
    days: 298,
    hours: 7,
    minutes: 21,
    seconds: 28
  }
  t.deepEqual(obj, res)
})
