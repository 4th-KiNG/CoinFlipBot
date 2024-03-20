import { observer } from "mobx-react-lite"
import { FC } from "react"

import Lost from "/assets/Sorry you lost.png"
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { RedLostRobot } from "../../../../../entity/GameStatusRobot/ui/RedLost/RedLostRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from "../../GameStatus.module.scss"

interface BlueLostProps {
  onTry?: () => void
}

export const BlueLose: FC<BlueLostProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()

  return (
    <div className={robotClasses.resultContainer}>
      <RedLostRobot />
      <img src={Lost} className={robotClasses.resultContainerText} />
      <TryAgainGameStatusButton onClick={() => {
        gameStatusStore.restore()
        onTry?.()
      }}
      />
    </div>
  )
})