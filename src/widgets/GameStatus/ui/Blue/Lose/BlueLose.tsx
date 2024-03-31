import { observer } from "mobx-react-lite"
import { FC } from "react"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import Lost from "/assets/Sorry you lost.png"
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { BlueLostRobot } from "../../../../../entity/GameStatusRobot/ui/BlueLost/BlueLostRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from "../../GameStatus.module.scss"

interface BlueLostProps {
  onTry?: () => void
}

export const BlueLose: FC<BlueLostProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()
  const [play] = useSound(sound1)
  return (
    <div className={robotClasses.resultContainer}>
      <BlueLostRobot />
      <img src={Lost} className={robotClasses.resultContainerText} />
      <TryAgainGameStatusButton onClick={() => {
        gameStatusStore.restore()
        onTry?.()
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      }}
      />
    </div>
  )
})