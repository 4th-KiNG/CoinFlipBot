import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import { observer } from "mobx-react-lite"
import { useState } from "react"

import { WalletMenuBalance } from "../../../entity/WalletMenu/ui/Balance/WalletMenuBalance.tsx"
import { WalletButtonEntity } from "../../../entity/WalletMenu/ui/WalletButton/WalletButtonEntity.tsx"
import { WalletButtonDisconnect } from "./Disconnect/WalletButtonDisconnect.tsx"
import classes from "./WalletButton.module.scss"

export const WalletButton = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [play] = useSound(sound1)
  return (
    <div className={classes.content}>
      <WalletButtonEntity onClick={() => {
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        setIsOpen((prev) => !prev)
      }}
      />
      {isOpen && (
        <div className={classes.hiddenContent}>
          <WalletMenuBalance />
          <WalletButtonDisconnect onDisconnect={() => {
            play()
            window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
            setIsOpen(false)
          }}
          />
        </div>
      )}
    </div>
  )
})