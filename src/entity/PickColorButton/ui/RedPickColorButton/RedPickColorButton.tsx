import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import { Button } from "../../../../shared/ui/control/Button"
import { styleParams } from "../../lib/styleParams.ts"
import classes from './RedPickColorButton.module.scss'

interface RedPickColorButtonProps {
  onChose: (color: 'red' | 'blue') => void
  type: 'circle' | 'rectangle'
  isChoosen?: boolean

}

export const RedPickColorButton:FC<RedPickColorButtonProps> = observer(({ onChose, type, isChoosen }) => {
  const [play] = useSound(sound1)
  return (
    <Button
      as={'button'}
      backgroundImage={styleParams.red[type].img}
      hoverBackgroundImage={styleParams.red[type].hoverImg}
      size={styleParams.red[type].size}
      className={clsx(classes.colorPick, {
        [classes._circle]: type === 'circle',
        [classes._isChoosen]: isChoosen,
      })}
      onClick={() => {
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        onChose('red')
      }}
    />
  )
})