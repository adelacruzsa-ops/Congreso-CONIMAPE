/**
 * Calcula la diferencia de tiempo en días, horas, minutos y segundos a partir de una fecha objetivo.
 * @param {string | Date} targetDate
 * @returns {{ dias: number, horas: number, minutos: number, segundos: number }}
 */
export function calculateTimeLeft(targetDate) {
  const fechaEvento = new Date(targetDate).getTime()
  const ahora = new Date().getTime()
  const diferencia = fechaEvento - ahora

  if (diferencia <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
    segundos: Math.floor((diferencia % (1000 * 60)) / 1000)
  }
}
