import { ImageOff } from "lucide-react"
import { useState } from "react"
import { cn } from "../../lib/utils"

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText: string
}

export function ImageWithFallback({ fallbackText, className, alt, ...props }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full min-h-36 w-full items-center justify-center gap-2 rounded-lg bg-muted/60 text-sm text-muted-foreground",
          className,
        )}
        role="img"
        aria-label={fallbackText}
      >
        <ImageOff className="size-4" />
        <span>{fallbackText}</span>
      </div>
    )
  }

  return (
    <img
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
