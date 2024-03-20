import { observer } from "mobx-react-lite"
import { FC } from "react"

import { RedLose } from "./Lose/RedLose.tsx"
import { RedWin } from "./Win/RedWin.tsx"

interface RedGameStatusProps {
  isWin?: boolean
  onTry?: () => void
}
export const RedGameStatus: FC<RedGameStatusProps> = observer(({ isWin, onTry }) => {
  if (isWin) return <RedWin onTry={onTry} />

  return <RedLose onTry={onTry} />
})