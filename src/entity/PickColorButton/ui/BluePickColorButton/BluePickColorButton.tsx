import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import { Button } from "../../../../shared/ui/control/Button"
import { styleParams } from "../../lib/styleParams.ts"
import classes from './BluePickColorButton.module.scss'

interface BluePickColorButtonProps {
  onChose: (color: 'red' | 'blue') => void
  type: 'circle' | 'rectangle'
  isChoosen?: boolean
}

export const BluePickColorButton:FC<BluePickColorButtonProps> = observer(({ onChose, type, isChoosen }) => {
  const [play] = useSound(sound1)
  return (
    <Button
      as={'button'}
      backgroundImage={styleParams.blue[type].img}
      hoverBackgroundImage={styleParams.blue[type].hoverImg}
      size={styleParams.blue[type].size}
      className={clsx(classes.colorPick,{
        [classes._circle]: type === 'circle',
        [classes._isChoosen]: isChoosen,
      })}
      onClick={() => {
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        onChose('blue')
      }}
    />
  )
})