'use client'

import { useEffect, useCallback } from 'react'

interface LightboxProps {
  imageSrc: string | null
  onClose: () => void
}

export default function Lightbox({ imageSrc, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (imageSrc) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [imageSrc, handleKeyDown])

  if (!imageSrc) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 z-50 lightbox-close"
        onClick={onClose}
        aria-label="Close image"
      >
        &times;
      </button>
      <img
        src={imageSrc}
        alt="Expanded view"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
