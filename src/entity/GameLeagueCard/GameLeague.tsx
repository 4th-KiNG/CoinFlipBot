import { toNano } from '@ton/core'
import { observer } from "mobx-react-lite"
import { FC } from "react"
import classes from '../GameHistoryCard/ui/GameHistoryCard.module.scss'
import ton from '/assets/tonico.svg'
interface GameLeagueCardProps{
    index: number,
    adress: string,
    value: BigInt
}

export const GameLeagueCard: FC<GameLeagueCardProps> = observer(( { index, adress, value }) => {
    console.log(index)
  return (
    <div className={classes.card}>
      <p>{index + 1 + "  " + adress.slice(0, 3) + "..." + adress.slice(-3) + "  " }</p> <img src={ton} className={classes.tonimg} alt="" /><p>{((parseFloat(value.toString()) / Number(toNano(1))).toFixed(2))}</p>
      <a
        className={classes.redirect}
        href={`https://tonviewer.com/${adress}}`}
        target={'_blank'}
        rel="noreferrer"
      >
      </a>
    </div>
  )
})