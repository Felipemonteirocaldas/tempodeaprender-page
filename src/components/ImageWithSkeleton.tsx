import { useState, ImgHTMLAttributes } from 'react'

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

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton (fades out when loaded) */}
      <div 
        className={`absolute inset-0 bg-brand-sky-light/50 animate-pulse transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${skeletonClassName}`} 
        aria-hidden="true"
      />
      {/* Imagem real */}
      <img
        {...props}
        className={`${className} relative z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
