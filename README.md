# Help
Convert seconds into Y/D/H/M/S, in calendar and astronomical format.

To install the package :
```
npm i convert-seconds-to-human
```

Remember to require the package :
```
const convert = require('convert-seconds-to-human')
```

## Examples
First example with ```cal``` format
```javascript
const resultCal = convert(123456789, 'cal')

console.log(resultCal)
/* result :  {
    years: 3,
    days: 333,
    hours: 21,
    minutes: 33,
    seconds: 9
}*/
```

Second example with ```astr``` format
```javascript
const resultAstr = convert(123456789, 'astr')

console.log(resultAstr)

/* result :  {
    years: 3,
    days: 333,
    hours: 3,
    minutes: 33,
    seconds: 9
}*/

