import { observer } from "mobx-react-lite"

import { NoConnectGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/NoConnect/NoConnectGameStatusesRobot.tsx"
import { ConnectWalletButton } from "../../../../../features/ConnectButton/ConnectWalletButton.tsx"
import robotClasses from '../../GameStatus.module.scss'

export const NoConnectGameStatusWidget = observer(() => {
  return (
    <div className={robotClasses.noConnectContainer}>
      <NoConnectGameStatusesRobot />
      <ConnectWalletButton />
    </div>
  )
})