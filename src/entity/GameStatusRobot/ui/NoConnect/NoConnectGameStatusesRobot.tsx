import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC } from "react"

import InitIcon from '/assets/Smiling.gif'

import robotClasses from '../GameStatusRobot.module.scss'

interface NoConnectGameStatusesRobotProps {
  isSmall?: boolean
}

export const NoConnectGameStatusesRobot: FC<NoConnectGameStatusesRobotProps> = observer(({ isSmall }) => {
  return (
    <img
      src={InitIcon}
      className={clsx(robotClasses.robot, {
        [robotClasses._small]: isSmall,
      })}
    />
  )
})