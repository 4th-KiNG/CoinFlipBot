import { observer } from "mobx-react-lite"
import { FC } from "react"

import Lost from "/assets/Sorry you lost.png"
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { BlueLostRobot } from "../../../../../entity/GameStatusRobot/ui/BlueLost/BlueLostRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from "../../GameStatus.module.scss"

interface RedLoseProps {
  onTry?: () => void
}

export const RedLose: FC<RedLoseProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()

  return (
    <div className={robotClasses.resultContainer}>
      <BlueLostRobot />
      <img src={Lost} className={robotClasses.resultContainerText} />
      <TryAgainGameStatusButton onClick={() => {
        gameStatusStore.restore()
        onTry?.()
      }}
      />
    </div>
  )
})