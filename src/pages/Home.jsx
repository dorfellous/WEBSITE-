import { Link } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { campaignImages } from '../data/campaignImages.js'

const STORAGE_KEY = 'de-fell-campaign-layout-v1'

function getInitialLayout() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved === 'object') {
      return saved
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
  }

  return Object.fromEntries(
    campaignImages.map((image, index) => [
      image.id,
      { x: image.x, y: image.y, z: index + 1 },
    ]),
  )
}

export default function Home() {
  const canvasRef = useRef(null)
  const dragRef = useRef(null)
  const [layout, setLayout] = useState(getInitialLayout)
  const maxZ = useMemo(
    () => Math.max(...Object.values(layout).map((item) => item.z || 1)),
    [layout],
  )

  const clampLayoutToCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    setLayout((current) => {
      let changed = false
      const next = { ...current }

      campaignImages.forEach((image) => {
        const element = canvas.querySelector(`[data-campaign-id="${image.id}"]`)
        const position = current[image.id]
        if (!element || !position) return

        const itemRect = element.getBoundingClientRect()
        const widthPercent = (itemRect.width / rect.width) * 100
        const heightPercent = (itemRect.height / rect.height) * 100
        const x = Math.min(Math.max(position.x, 0), Math.max(100 - widthPercent, 0))
        const y = Math.min(Math.max(position.y, 0), Math.max(100 - heightPercent, 0))

        if (x !== position.x || y !== position.y) {
          changed = true
          next[image.id] = { ...position, x, y }
        }
      })

      return changed ? next : current
    })
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout))
  }, [layout])

  useEffect(() => {
    clampLayoutToCanvas()
  }, [clampLayoutToCanvas, layout])

  useEffect(() => {
    window.addEventListener('resize', clampLayoutToCanvas)
    return () => window.removeEventListener('resize', clampLayoutToCanvas)
  }, [clampLayoutToCanvas])

  useEffect(() => {
    const endDrag = () => {
      dragRef.current = null
      document.body.classList.remove('is-dragging')
    }

    const moveDrag = (event) => {
      const drag = dragRef.current
      const canvas = canvasRef.current
      if (!drag || !canvas) return

      const point = event.touches ? event.touches[0] : event
      const rect = canvas.getBoundingClientRect()
      const nextX = ((point.clientX - rect.left - drag.offsetX) / rect.width) * 100
      const nextY = ((point.clientY - rect.top - drag.offsetY) / rect.height) * 100
      const maxX = 100 - drag.widthPercent
      const maxY = 100 - drag.heightPercent

      setLayout((current) => ({
        ...current,
        [drag.id]: {
          ...current[drag.id],
          x: Math.min(Math.max(nextX, 0), Math.max(maxX, 0)),
          y: Math.min(Math.max(nextY, 0), Math.max(maxY, 0)),
        },
      }))
    }

    window.addEventListener('pointermove', moveDrag)
    window.addEventListener('pointerup', endDrag)
    window.addEventListener('touchmove', moveDrag, { passive: false })
    window.addEventListener('touchend', endDrag)

    return () => {
      window.removeEventListener('pointermove', moveDrag)
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('touchmove', moveDrag)
      window.removeEventListener('touchend', endDrag)
    }
  }, [])

  const bringForward = (id) => {
    setLayout((current) => ({
      ...current,
      [id]: { ...current[id], z: maxZ + 1 },
    }))
  }

  const startDrag = (event, image) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const target = event.currentTarget
    const point = event.touches ? event.touches[0] : event
    const canvasRect = canvas.getBoundingClientRect()
    const itemRect = target.getBoundingClientRect()

    dragRef.current = {
      id: image.id,
      offsetX: point.clientX - itemRect.left,
      offsetY: point.clientY - itemRect.top,
      widthPercent: (itemRect.width / canvasRect.width) * 100,
      heightPercent: (itemRect.height / canvasRect.height) * 100,
    }

    document.body.classList.add('is-dragging')
    bringForward(image.id)
    target.setPointerCapture?.(event.pointerId)
  }

  const resetLayout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setLayout(
      Object.fromEntries(
        campaignImages.map((image, index) => [
          image.id,
          { x: image.x, y: image.y, z: index + 1 },
        ]),
      ),
    )
  }

  return (
    <section className="home-page" aria-label="Dé-Féll campaign canvas">
      <div className="home-controls">
        <button type="button" onClick={resetLayout}>
          RESET LAYOUT
        </button>
        <Link to="/accessories">VIEW COLLECTION</Link>
      </div>

      <div ref={canvasRef} className="campaign-canvas">
        <p className="canvas-caption">Dé-Féll / FIRST VISUAL INDEX</p>
        {campaignImages.map((image) => {
          const position = layout[image.id] || { x: image.x, y: image.y, z: 1 }
          return (
            <button
              type="button"
              key={image.id}
              data-campaign-id={image.id}
              className="campaign-item"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                zIndex: position.z,
                width: `min(${image.width}px, 54vw)`,
              }}
              onPointerDown={(event) => startDrag(event, image)}
              onTouchStart={(event) => startDrag(event, image)}
              onClick={() => bringForward(image.id)}
              aria-label={`Move ${image.label} campaign image`}
            >
              <img src={image.src} alt={image.alt} draggable="false" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
