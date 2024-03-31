import { observer } from "mobx-react-lite"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import MenuIcon from '/assets/Home.png'

import { useStores } from "../../../../shared/store/StoreProvider.tsx"
import { Button } from "../../../../shared/ui/control/Button"

export const HomeButton = observer(() => {
  const { gameStatusStore } = useStores()
  const [play] = useSound(sound1)
  return (
    <Button
      as={'button'}
      backgroundImage={MenuIcon}
      size={'xsm'}
      onClick={() => {
        play()
        document.getElementById("history")?.classList.add("hidden")
        document.getElementById("league")?.classList.add("hidden")
        document.getElementById("home")?.classList.remove("hidden")
        gameStatusStore.restore()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      }}
    />
  )
})