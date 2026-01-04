import { forwardRef, type ImgHTMLAttributes } from 'react'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <img ref={ref} {...props} />
})

Image.displayName = 'Image'
