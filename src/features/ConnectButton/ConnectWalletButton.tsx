import { useTonAddress, useTonConnectModal, useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import { ConnectWalletButtonEntity } from "../../entity/Wallet/ui/ConnectWalletButton/ConnectWalletButtonEntity.tsx"
import { useStores } from "../../shared/store/StoreProvider.tsx"

export const ConnectWalletButton = observer(() => {
  const { open } = useTonConnectModal()
  const [tonConnectUI] = useTonConnectUI()
  const walletAddress = useTonAddress()
  const [play] = useSound(sound1)
  const { gameStatusStore } = useStores()

  const onClick = useCallback(async () => {
    if (walletAddress) {
      await tonConnectUI.disconnect()
      gameStatusStore.restore()
    }
    else{
      open()
    }
    play()
    window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }, [open, tonConnectUI, walletAddress, gameStatusStore])

  return (
    <ConnectWalletButtonEntity onClick={onClick} />
  )
})