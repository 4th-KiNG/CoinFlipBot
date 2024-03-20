import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

import MenuIcon from '/assets/Home.png'

import { useStores } from "../../../../shared/store/StoreProvider.tsx"
import { Button } from "../../../../shared/ui/control/Button"

export const HomeButton = observer(() => {
  const { gameStatusStore } = useStores()

  const navigate = useNavigate()

  return (
    <Button
      as={'button'}
      backgroundImage={MenuIcon}
      size={'xsm'}
      onClick={() => {
        gameStatusStore.restore()
        navigate('/')
        window.navigator.vibrate(100)
      }}
    />
  )
})