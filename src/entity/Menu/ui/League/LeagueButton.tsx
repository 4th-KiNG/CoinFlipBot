import { observer } from "mobx-react-lite"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import MenuIcon from '/assets/League.png'
import { Button } from "../../../../shared/ui/control/Button"

export const LeagueButton = observer(() => {
  const [play] = useSound(sound1)
  return (
    <Button as={'button'} 
    backgroundImage={MenuIcon} 
    size={'xsm'}
    onClick={() => {
      document.getElementById("history")?.classList.add("hidden")
      document.getElementById("league")?.classList.remove("hidden")
      document.getElementById("home")?.classList.add("hidden")
      play()
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }} />
  )
})