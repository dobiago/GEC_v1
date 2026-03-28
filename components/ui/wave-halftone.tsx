"use client"

import type { PointerEvent as ReactPointerEvent } from "react"
import { useCallback, useEffect, useRef } from "react"

interface WaveHalftoneProps {
  className?: string
  speed?: number
  dotColor?: string
  waveColor?: string
  interactive?: boolean
}

interface Dot {
  x: number
  y: number
  cx: number
  cy: number
}

interface PointerState {
  x: number
  y: number
  inside: boolean
}

const DEFAULT_DOT_COLOR = "rgba(255,255,255,0.18)"
const DEFAULT_WAVE_COLOR = "rgba(255,255,255,0.6)"

export function WaveHalftone({
  className = "",
  speed = 0.012,
  dotColor = DEFAULT_DOT_COLOR,
  waveColor = DEFAULT_WAVE_COLOR,
  interactive = true,
}: WaveHalftoneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef(0)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, inside: false })
  const crestYRef = useRef(0)
  const targetCrestYRef = useRef(0)
  const phaseRef = useRef(0)
  const metricsRef = useRef({ width: 0, height: 0, dpr: 1, spacing: 18 })

  const rebuildDots = useCallback((width: number, height: number) => {
    const spacing = width < 480 ? 16 : 18
    const columns = Math.ceil(width / spacing) + 2
    const rows = Math.ceil(height / spacing) + 2
    const dots: Dot[] = []

    for (let row = 0; row < rows; row += 1) {
      const y = row * spacing
      const rowOffset = row % 2 === 0 ? 0 : spacing * 0.5

      for (let column = 0; column < columns; column += 1) {
        const x = column * spacing + rowOffset
        dots.push({
          x,
          y,
          cx: x,
          cy: y,
        })
      }
    }

    dotsRef.current = dots
    metricsRef.current.spacing = spacing
    targetCrestYRef.current = height * 0.5
    if (crestYRef.current === 0) {
      crestYRef.current = height * 0.5
    }
  }, [])

  const resizeCanvas = useCallback(
    (canvas: HTMLCanvasElement) => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      if (width === 0 || height === 0) {
        return false
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)

      metricsRef.current = {
        ...metricsRef.current,
        width,
        height,
        dpr,
      }

      rebuildDots(width, height)
      return true
    },
    [rebuildDots]
  )

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    pointerRef.current = {
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
      inside: true,
    }
  }, [])

  const handlePointerMove = useCallback((event: PointerEvent) => {
    if (!interactive) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height

    if (inside) {
      pointerRef.current = { x, y, inside: true }
      targetCrestYRef.current = y
    }
  }, [interactive])

  const handlePointerLeave = useCallback(() => {
    pointerRef.current.inside = false
  }, [])

  useEffect(() => {
    if (!interactive) {
      pointerRef.current.inside = false
      return
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerLeave, { passive: true })

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerLeave)
    }
  }, [handlePointerLeave, handlePointerMove, interactive])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    let initialized = false

    const draw = () => {
      const { width, height, dpr, spacing } = metricsRef.current
      if (width === 0 || height === 0) {
        animationFrameRef.current = window.requestAnimationFrame(draw)
        return
      }

      phaseRef.current += speed

      const defaultCrestY = height * 0.5
      if (!pointerRef.current.inside) {
        targetCrestYRef.current += (defaultCrestY - targetCrestYRef.current) * 0.05
      }
      crestYRef.current += (targetCrestYRef.current - crestYRef.current) * 0.05

      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      context.clearRect(0, 0, width, height)

      const amplitude = Math.max(height * 0.12, 28)
      const wavelength = Math.max(width * 0.22, 120)
      const influenceRadius = spacing * 1.75
      const repulsionRadius = 150
      const maxRepulsion = Math.min(spacing * 1.4, 22)

      for (const dot of dotsRef.current) {
        const waveY =
          crestYRef.current +
          Math.sin(dot.x / wavelength + phaseRef.current) * amplitude +
          Math.sin(dot.x / (wavelength * 0.45) - phaseRef.current * 0.7) * amplitude * 0.18

        const distanceToWave = Math.abs(dot.y - waveY)
        const waveStrength = Math.max(0, 1 - distanceToWave / influenceRadius)

        let offsetX = 0
        let offsetY = 0

        if (interactive && pointerRef.current.inside) {
          const dx = dot.x - pointerRef.current.x
          const dy = dot.y - pointerRef.current.y
          const distance = Math.hypot(dx, dy)

          if (distance > 0 && distance < repulsionRadius) {
            const repelStrength = (1 - distance / repulsionRadius) * maxRepulsion
            offsetX += (dx / distance) * repelStrength
            offsetY += (dy / distance) * repelStrength
          }
        }

        const radius = 1 + waveStrength * 3.6
        const alpha = 0.15 + waveStrength * 0.45
        const targetX = dot.x + offsetX
        const targetY = dot.y + offsetY

        dot.cx += (targetX - dot.cx) * 0.08
        dot.cy += (targetY - dot.cy) * 0.08

        context.beginPath()
        context.fillStyle = waveStrength > 0.08 ? waveColor.replace(/[\d.]+\)$/u, `${alpha})`) : dotColor
        context.globalAlpha = 1
        context.arc(dot.cx, dot.cy, radius, 0, Math.PI * 2)
        context.fill()
      }

      animationFrameRef.current = window.requestAnimationFrame(draw)
    }

    const init = () => {
      if (initialized || !resizeCanvas(canvas)) {
        return
      }

      initialized = true
      targetCrestYRef.current = metricsRef.current.height * 0.5
      crestYRef.current = metricsRef.current.height * 0.5
      animationFrameRef.current = window.requestAnimationFrame(draw)
    }

    if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
      init()
    } else {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        const entry = entries[0]
        if (!entry) {
          return
        }

        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          resizeObserverRef.current?.disconnect()
          resizeObserverRef.current = null
          init()
        }
      })
      resizeObserverRef.current.observe(canvas)
    }

    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        resizeCanvas(canvas)
      })
      resizeObserverRef.current.observe(canvas)
    }

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
      resizeObserverRef.current?.disconnect()
      resizeObserverRef.current = null
    }
  }, [dotColor, interactive, resizeCanvas, speed, waveColor])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive) {
      return
    }

    canvas.addEventListener("mouseleave", handlePointerLeave)

    return () => {
      canvas.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [handlePointerLeave, interactive])

  return (
    <div className={`h-full w-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={interactive ? handlePointerDown : undefined}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          touchAction: interactive ? "none" : "auto",
        }}
      />
    </div>
  )
}
