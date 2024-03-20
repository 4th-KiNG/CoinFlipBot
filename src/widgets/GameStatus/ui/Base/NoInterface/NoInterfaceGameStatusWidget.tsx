import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

import { NoConnectGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/NoConnect/NoConnectGameStatusesRobot.tsx"
import robotClasses from '../../GameStatus.module.scss'

export const NoInterfaceGameStatusWidget: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <div className={robotClasses.noConnectContainer}>
      <NoConnectGameStatusesRobot isSmall />
      {children}
    </div>
  )
})