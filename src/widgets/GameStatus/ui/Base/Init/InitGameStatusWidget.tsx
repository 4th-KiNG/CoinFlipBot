import { observer } from "mobx-react-lite"

import { InitGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/Init/InitGameStatusesRobot.tsx"

export const InitGameStatusWidget = observer(() => {
  return (
    <div>
      <InitGameStatusesRobot />
    </div>
  )
})