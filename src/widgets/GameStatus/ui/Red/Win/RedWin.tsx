import { observer } from "mobx-react-lite"
import { FC } from "react"

import Congrats from '/assets/Congrats.png'
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { RedWinRobot } from "../../../../../entity/GameStatusRobot/ui/RedWin/RedWinRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from '../../GameStatus.module.scss'

interface RedWinProps {
  onTry?: () => void
}

export const RedWin: FC<RedWinProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()
  
  return (
    <div className={robotClasses.resultContainer}>
      <RedWinRobot />
      <img src={Congrats} className={robotClasses.resultContainerText} />
      <TryAgainGameStatusButton onClick={() => {
        gameStatusStore.restore()
        onTry?.()
      }}
      />
    </div>
  )
})