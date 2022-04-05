const yearInSecondsAstr = 31557600 // 31,557,600 seconds (365.25 days)
const yearInSecondsCal = 31536000 // 31,536,000 seconds (365 days)

/**
 * Get the years count
 * @param {*} duration
 * @param {*} yearInSeconds
 * @returns
 */
function getYears (duration, yearInSeconds) {
  const rest = duration % yearInSeconds
  const durationInSeconds = duration - rest
  const years = durationInSeconds / yearInSeconds

  return {
    years,
    rest
  }
}

/**
 * Duration calculation to human format
 * @param {*} duration in seconds
 * @param {*} format 'cal' or 'astr'
 */
module.exports = function convert(duration, format) {
  const obj = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  // if duration > 1 year : calculate years before the rest
  if (format === 'astr' && duration >= yearInSecondsAstr) {
    const res = getYears(duration, yearInSecondsAstr)
    obj.years = res.years // Get years
    duration = res.rest // Get rest
  } else if (format === 'cal' && duration >= yearInSecondsCal) {
    const res = getYears(duration, yearInSecondsCal)
    obj.years = res.years
    duration = res.rest
  }

  /// SECONDS
  if (duration < 60) {
    obj.seconds = duration
  } else if (duration === 60) {
    obj.minutes = 1
    obj.seconds = 0
  } else {
    /// MINUTES
    const restSeconds = duration % 60 // Rest in secondes
    const durationSeconds = duration - restSeconds // Duration - rest
    const minutes = durationSeconds / 60 // Total number of minutes

    if (minutes < 60) {
      obj.minutes = minutes
      obj.seconds = restSeconds
    } else if (minutes === 60) {
      obj.hours = 1
      obj.minutes = 0
      obj.seconds = restSeconds
    } else {
      /// HOURS
      const restMinutes = minutes % 60
      const durationMinutes = minutes - restMinutes
      const hours = durationMinutes / 60

      if (hours < 24) {
        obj.hours = hours
        obj.minutes = restMinutes
        obj.seconds = restSeconds
      } else if (hours === 24) {
        obj.days = 1
        obj.hours = 0
        obj.seconds = restSeconds
      } else {
        /// DAYS
        const restHours = hours % 24
        const durationHours = hours - restHours
        const days = durationHours / 24

        obj.days = days
        obj.hours = restHours
        obj.minutes = restMinutes
        obj.seconds = restSeconds
      }
    }
  }

  return obj
}
