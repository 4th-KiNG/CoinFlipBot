import { observer } from "mobx-react-lite"
import { FC } from "react"

import Congrats from "/assets/Congrats.png"
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { BlueWinRobot } from "../../../../../entity/GameStatusRobot/ui/BlueWin/BlueWinRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from "../../GameStatus.module.scss"

interface BlueWinProps {
  onTry?: () => void
}

export const BlueWin:FC<BlueWinProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()

  return (
    <div className={robotClasses.resultContainer}>
      <BlueWinRobot />
      <img src={Congrats} className={robotClasses.resultContainerText} />
      <TryAgainGameStatusButton onClick={() => {
        gameStatusStore.restore()
        onTry?.()
      }}
      />
    </div>
  )
})