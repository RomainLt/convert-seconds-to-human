// Format astronomical (365.25days)
function getAstrYears(duration) {
    const oneYearInSeconds = 31557600
    const rest = duration % oneYearInSeconds
    const durationSeconds = duration - rest
    const years = durationSeconds / oneYearInSeconds

    return {
        years,
        rest
    }
}

// Format calendaire (365days)
function getCalYears(duration) {
    const oneYearInSeconds = 31536000
    const rest = duration % oneYearInSeconds
    const durationSeconds = duration - rest
    const years = durationSeconds / oneYearInSeconds

    return {
        years,
        rest
    }
}

module.exports = function convert(duration, format) { // Calcul la durée en format humain
    const obj = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    // if duration > 1 year : calculate years before the rest
    if (format === "astr" && duration > 31557599) {
        const res = getAstrYears(duration)
        obj.years = res.years // Récupération des années
        duration = res.rest // Réattribution de la durée
    } else if (format === 'cal' && duration > 31535999) {
        const res = getCalYears(duration)
        obj.years = res.years // Récupération des années
        duration = res.rest // Réattribution de la durée
    }

    //// SECONDS
    if (duration < 60) {
        obj.seconds = duration
    } else if (duration === 60) {
        obj.minutes = 1
        obj.seconds = 0
    } else {
        // MINUTES
        const restSeconds = duration % 60 // Reste en secondes
        const durationSeconds = duration - restSeconds // Durée - reste
        const minutes = durationSeconds / 60 // Nombre total de minutes

        if (minutes < 60) {
            obj.minutes = minutes

            if (restSeconds > 0) {
                obj.seconds = restSeconds
            }
        } else if (minutes === 60) {
            obj.hours = 1
        } else {
            //// HOURS
            const restMinutes = minutes % 60 // Reste en minutes
            const durationMinutes = minutes - restMinutes // Durée - reste
            const hours = durationMinutes / 60 // Nombre total d'heures

            if (hours < 24) {
                obj.hours = hours
                obj.minutes = restMinutes
                obj.seconds = restSeconds
            } else {
                //// DAYS
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