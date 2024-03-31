import { useTonAddress } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import { GameHistoryCard } from "../../../entity/GameHistoryCard/ui/GameHistoryCard.tsx"
import { useActivatedStore } from "../../../shared/lib/store/useActivateStore.ts"
import { ButtonSpinner } from "../../../shared/ui/control/Button/ButtonSpinner"
import classes from './GameHistoryWidget.module.scss'

export const GameHistoryWidget = observer(() => {
  const address = useTonAddress()
  const { gameHistoryStore } = useActivatedStore('gameHistoryStore', address)
  
  return (
    <div className={classes.container}>
      <InfiniteScroll
        pullDownToRefresh
        dataLength={(gameHistoryStore.games?.length ?? 0)}
        next={() => {gameHistoryStore.requestMore()}}
        hasMore={gameHistoryStore.hasMore}
        pullDownToRefreshThreshold={50}
        refreshFunction={gameHistoryStore.reload}
        height={350}
        className={classes.infiniteScroll}
        loader={<ButtonSpinner />}
      >
        {gameHistoryStore.games?.map((item, index: number) => {
          console.log((gameHistoryStore.games?.length ?? 0) - 1)

          return (
            (index + 1) * 2 <= gameHistoryStore.games?.length ? <React.Fragment key={index}>
              <GameHistoryCard game={item} />
              {(index !== (gameHistoryStore.games?.length ?? 0) - 1) && <div className={classes.divine} />}
            </React.Fragment> : ""
          )
        })}
      </InfiniteScroll>
    </div>
  )
})