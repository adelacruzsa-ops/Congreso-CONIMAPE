import { useState, useEffect } from 'react'
import { calculateTimeLeft } from '../utils/dateUtils'

/**
 * Custom Hook para gestionar el contador regresivo de forma reutilizable.
 * @param {string} targetDate
 */
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [targetDate])

  return timeLeft
}
