import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC } from "react"

import { cutAddress } from "../../../shared/lib/address/cutAddress.ts"
import { fromDecimals } from "../../../shared/lib/numbers/formatNumbers.ts"
import { formatTimeAgo } from "../../../shared/lib/time/formatTimeAgo.ts"
import { Txt } from "../../../shared/ui/display/Txt/Txt.tsx"
import { Game } from "../lib/types.ts"
import classes from './GameHistoryCard.module.scss'

interface GameHistoryCardProps {
  game: Game
}

export const GameHistoryCard: FC<GameHistoryCardProps> = observer(( { game }) => {
  return (
    <div className={classes.card}>
      {game.isWin && (
        <Txt className={classes.text}>{cutAddress(game.userAddress)} JUST
          <Txt className={clsx(classes.textResult, classes._win, classes.text)}> DOUBLED </Txt>
          {`${fromDecimals(game.value ?? 0, 9)}` } TON
        </Txt>
      )}
      {!game.isWin && (
        <Txt className={classes.text}> {cutAddress(game.userAddress)} <Txt className={clsx(classes.textResult, classes.text)}>
          LOST
        </Txt> THEIR LIFE SAVINGS OF {`${fromDecimals(game.value ?? 0, 9)}` } TON
        </Txt>
      )}
      <Txt className={classes.time}> {formatTimeAgo(game.date ?? 0)} </Txt>
      <a
        className={classes.redirect}
        href={`https://tonviewer.com/transaction/${game.event}`}
        target={'_blank'}
        rel="noreferrer"
      >
        <img src={'/assets/Redirect.svg'} />
      </a>
    </div>
  )
})