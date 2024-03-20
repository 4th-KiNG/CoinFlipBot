import { useTonAddress } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { FC, ReactNode, useEffect } from "react"

import { useStores } from "../../../shared/store/StoreProvider.tsx"
import { Hide } from "../../../shared/ui/display/Hide/Hide.tsx"
import { useDeposit } from "../lib/useDeposit.ts"
import { ChoseColorWidget } from "./Base/ChoseColor/ChoseColorWidget.tsx"
import { LoadingWidget } from "./Base/LoadingWidget/LoadingWidget.tsx"
import { NoConnectGameStatusWidget } from "./Base/NoConnect/NoConnectGameStatusWidget.tsx"
import { NoInterfaceGameStatusWidget } from "./Base/NoInterface/NoInterfaceGameStatusWidget.tsx"
import { PlaceBet } from "./Base/PlaceBet/PlaceBet.tsx"
import { BlueGameStatus } from "./Blue/BlueGameStatus.tsx"
import classes from './GameStatus.module.scss'
import { RedGameStatus } from "./Red/RedGameStatus.tsx"

interface GameStatusProps {
  isNoInterface?: boolean
  element?: ReactNode
}

export const GameStatus: FC<GameStatusProps> = observer(({ isNoInterface, element }) => {
  const connectedAddress = useTonAddress()
  const { gameStatusStore } = useStores()

  const { deposit, isLoading, result, setResult, error } = useDeposit()

  useEffect(() => {
    if (error) gameStatusStore.restore()
  }, [error])

  if (isNoInterface) {return (
    <div className={classes.container}>
      <NoInterfaceGameStatusWidget>
        {element}
      </NoInterfaceGameStatusWidget>
    </div>
  )}

  return (
    <div className={classes.container}>
      <Hide hide={!!connectedAddress}>
      <ChoseColorWidget  deposit={deposit} />
      </Hide>
      <Hide hide={!connectedAddress || !!gameStatusStore.value || isLoading || result !== undefined} >
        <PlaceBet />
      </Hide>
      <Hide hide={!gameStatusStore.value || !connectedAddress || isLoading || result !== undefined}>
        <ChoseColorWidget  deposit={deposit} />
      </Hide>
      <Hide hide={!connectedAddress || !isLoading || result !== undefined}>
        <LoadingWidget />
      </Hide>
      <Hide hide={!connectedAddress || isLoading || result === undefined || gameStatusStore.color !== 'red'}>
        <RedGameStatus
          isWin={result}
          onTry={() => {
            setResult(undefined)
          }}
        />
      </Hide>
      <Hide hide={!connectedAddress || isLoading || result === undefined || gameStatusStore.color !== 'blue'}>
        <BlueGameStatus
          isWin={result}
          onTry={() => {
            setResult(undefined)
          }}
        />
      </Hide>
    </div>

  )
})