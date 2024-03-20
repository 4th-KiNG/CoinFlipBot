import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

import MenuIcon from '/assets/Recent.png'

import { Button } from "../../../../shared/ui/control/Button"

export const RecentButton = observer(() => {
  const navigate = useNavigate()
  
  return (
    <Button
      as={'button'}
      backgroundImage={MenuIcon}
      size={'xsm'}
      onClick={() => {
        navigate('/history')
        window.navigator.vibrate(100)
      }}
    />
  )
})