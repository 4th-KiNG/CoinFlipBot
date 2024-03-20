import { observer } from "mobx-react-lite"

import { LoadingGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/Loading/LoadingGameStatusesRobot.tsx"

export const LoadingWidget = observer(() => {
  return (
    <div>
      <LoadingGameStatusesRobot />
    </div>
  )
})