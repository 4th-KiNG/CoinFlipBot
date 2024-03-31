import { observer } from "mobx-react-lite"
import { FC } from "react"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import {
  DoubleOrNothingGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/DobuleOrNothing/DoubleOrNothingGameStatusButton.tsx"
import {
  PickColorGameStatusesRobot,
} from "../../../../../entity/GameStatusRobot/ui/PickColor/PickColorGameStatusesRobot.tsx"
import {
  BluePickColorButton,
} from "../../../../../entity/PickColorButton/ui/BluePickColorButton/BluePickColorButton.tsx"
import { RedPickColorButton } from "../../../../../entity/PickColorButton/ui/RedPickColorButton/RedPickColorButton.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import statusClasses from '../../GameStatus.module.scss'

interface ChoseColorWidgetProps {
  deposit?: (bet: string) => Promise<boolean | undefined>
}

export const ChoseColorWidget: FC<ChoseColorWidgetProps> = observer(({ deposit }) => {
  const { gameStatusStore } = useStores()
  const [play] = useSound(sound1)
  return (
    <div className={statusClasses.statusContainer}>
      <div className={statusClasses.robotAndColor}>
        <div className={statusClasses.colorPickContainer}>
          <PickColorGameStatusesRobot />
        </div>
        <div className={statusClasses.colorPickContainer}>
          <RedPickColorButton
            type={'circle'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
          <BluePickColorButton
            type={'circle'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
        </div>
      </div>
      <DoubleOrNothingGameStatusButton
        color={gameStatusStore.color}
        bet = {gameStatusStore.bet.slice(0, -9)}
        onClick={() => {
          if (!gameStatusStore.color) return
          void deposit?.(gameStatusStore.bet ?? '0')
          play()
          window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        }}
      />
    </div>
  )
})