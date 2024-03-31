import { observer } from "mobx-react-lite"

import MenuIcon from '/assets/Recent.png'
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import { Button } from "../../../../shared/ui/control/Button"

export const RecentButton = observer(() => {
  const [play] = useSound(sound1)
  return (
    <Button
      as={'button'}
      backgroundImage={MenuIcon}
      size={'xsm'}
      onClick={() => {
        document.getElementById("history")?.classList.remove("hidden")
        document.getElementById("league")?.classList.add("hidden")
        document.getElementById("home")?.classList.add("hidden")
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      }}
    />
  )
})