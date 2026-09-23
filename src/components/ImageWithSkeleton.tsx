import { useEffect, useRef, useState, ImgHTMLAttributes } from 'react'

interface ImageWithSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
  wrapperClassName?: string;
}

export default function ImageWithSkeleton({ 
  className = '', 
  skeletonClassName = '', 
  wrapperClassName = '',
  ...props 
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  /* Imagem em cache ou carregada antes da hidratação não dispara onLoad de novo */
  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true)
  }, [])

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton (fades out when loaded) */}
      <div 
        className={`absolute inset-0 bg-brand-sky-light/50 animate-pulse transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${skeletonClassName}`} 
        aria-hidden="true"
      />
      {/* Imagem real */}
      <img
        loading="lazy"
        decoding="async"
        {...props}
        ref={imgRef}
        className={`${className} relative z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </div>
  )
}
