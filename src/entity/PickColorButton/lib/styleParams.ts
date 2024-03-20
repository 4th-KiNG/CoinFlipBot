import BlueCircle from "/assets/Blue.png"
import BlueRectangle from "/assets/BlueButtonChose.png"
import HoverImgBlue from '/assets/BlueHover.png'
import RedCircle from "/assets/Red.png"
import RedRectangle from "/assets/RedButtonChose.png"
import HoverImgRed from '/assets/RedHover.png'

export const styleParams: Record<string, Record<string, { img: string, size: 'lg' | 'sm', hoverImg?: string }>> = {
  blue: {
    circle: {
      hoverImg: HoverImgBlue,
      img: BlueCircle,
      size: 'lg',
    },
    rectangle: {
      img: BlueRectangle,
      size: 'sm',
    },
  },
  red: {
    circle: {
      hoverImg: HoverImgRed,
      img: RedCircle,
      size: 'lg',
    },
    rectangle: {
      img: RedRectangle,
      size: 'sm',
    },
  },
}