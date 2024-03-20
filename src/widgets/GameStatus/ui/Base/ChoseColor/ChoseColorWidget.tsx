import { observer } from "mobx-react-lite"
import { FC } from "react"

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
        bet = {gameStatusStore.bet}
        onClick={() => {
          if (!gameStatusStore.color) return

          console.log(gameStatusStore.bet)

          void deposit?.(gameStatusStore.bet ?? '0')
        }}
      />
    </div>
  )
})