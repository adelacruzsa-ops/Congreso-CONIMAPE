import { useMemo } from 'react'

// Mapa topográfico único por ponente: se muestra mientras no haya foto.
function seeded(seed) {
  let a = (seed * 2654435761) >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Mapa topográfico único por ponente (se usa cuando todavía no hay foto)
export default function ContornosPonente({ id, color = '#d9a441', gain = 1 }) {
  const paths = useMemo(() => {
    const r = seeded(id + 11)
    const cx = 50 + (r() - 0.5) * 24
    const cy = 56 + (r() - 0.5) * 20
    const p1 = r() * 6.28, p2 = r() * 6.28, p3 = r() * 6.28
    const a1 = 0.08 + r() * 0.08, a2 = 0.05 + r() * 0.06, a3 = 0.03 + r() * 0.04
    const out = []
    for (let k = 1; k <= 10; k++) {
      const R = k * 7
      const pts = []
      for (let i = 0; i <= 64; i++) {
        const t = (i / 64) * Math.PI * 2
        const rr = R * (1 + a1 * Math.sin(2 * t + p1 + k * 0.13) + a2 * Math.sin(3 * t + p2) + a3 * Math.sin(5 * t + p3 + k * 0.2))
        pts.push(`${(cx + rr * Math.cos(t)).toFixed(1)} ${(cy + rr * Math.sin(t) * 1.15).toFixed(1)}`)
      }
      out.push({ d: `M${pts.join('L')}Z`, w: k % 4 === 0 ? 1 : 0.5, o: k % 4 === 0 ? 0.65 : 0.33 })
    }
    return out
  }, [id])
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none" stroke={color} aria-hidden="true">
      {paths.map((p, i) => <path key={i} d={p.d} strokeWidth={p.w} opacity={Math.min(1, p.o * gain)} />)}
    </svg>
  )
}

