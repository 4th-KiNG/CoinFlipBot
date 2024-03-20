import { observer } from "mobx-react-lite"
import { FC } from "react"

import { BlueLose } from "./Lose/BlueLose.tsx"
import { BlueWin } from "./Win/BlueWin.tsx"

interface BlueGameStatusProps {
  isWin?: boolean
  onTry?: () => void
}
export const BlueGameStatus: FC<BlueGameStatusProps> = observer(({ isWin, onTry }) => {
  if (isWin) return <BlueWin onTry={onTry} />

  return <BlueLose onTry={onTry} />
})