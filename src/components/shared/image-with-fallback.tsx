import { ImageOff } from "lucide-react"
import { useState } from "react"
import { cn } from "../../lib/utils"

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText: string
}

function imageAtWidth(src: string, width: number) {
  if (!src.includes("thumb.wikimedia.org") || !src.includes("/330px-")) {
    return undefined
  }

  return src.replace("/330px-", `/${width}px-`)
}

export function ImageWithFallback({ fallbackText, className, alt, src, srcSet, sizes, ...props }: ImageWithFallbackProps) {
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

  const responsiveSrcSet =
    srcSet ??
    (src
      ? [640, 960, 1280]
          .map((width) => {
            const image = imageAtWidth(src, width)
            return image ? `${image} ${width}w` : undefined
          })
          .filter((image): image is string => Boolean(image))
          .join(", ")
      : undefined)

  return (
    <img
      alt={alt}
      src={src ? imageAtWidth(src, 640) ?? src : undefined}
      srcSet={responsiveSrcSet || undefined}
      sizes={sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
