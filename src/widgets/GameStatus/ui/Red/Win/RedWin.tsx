import { observer } from "mobx-react-lite"
import { FC } from "react"

import Congrats from '/assets/Congrats.png'
import {
  TryAgainGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/TryAgain/TryAgainGameStatusButton.tsx"
import { RedWinRobot } from "../../../../../entity/GameStatusRobot/ui/RedWin/RedWinRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import robotClasses from '../../GameStatus.module.scss'
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
interface RedWinProps {
  onTry?: () => void
}

export const RedWin: FC<RedWinProps> = observer(({ onTry }) => {
  const { gameStatusStore } = useStores()
  const [play] = useSound(sound1)
  return (
    <div className={robotClasses.resultContainer}>
      <RedWinRobot />
      <img src={Congrats} className={robotClasses.resultContainerText} />
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