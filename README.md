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


const resultAstr = convert(356000, 'cal')

console.log(resultAstr)

/* result :  { 
    years: 39, 
    days: 53, 
    hours: 23, 
    minutes: 31, 
    seconds: 30
}*/
```

Second example with ```astr``` format
```javascript
const resultCal = convert(356000, 'astr')

console.log(resultCal)

/* result :  { 
    years: 39, 
    days: 44, 
    hours: 5, 
    minutes: 31, 
    seconds: 30
}*/

