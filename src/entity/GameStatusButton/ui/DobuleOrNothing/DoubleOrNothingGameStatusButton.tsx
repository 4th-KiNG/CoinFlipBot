
import { observer } from "mobx-react-lite"
import { FC, useMemo } from "react"

import BlueDouble from '/assets/Blue1.png'
import Double from '/assets/Blue2.png'
import RedDouble from '/assets/Red1.png'
import { Button } from "../../../../shared/ui/control/Button"
import classes from './DoubleOrNothingGameStatusButton.module.scss'

interface DoubleOrNothingGameStatusButtonProps {
  payment?: string
  bet?: string
  isDisabled?: boolean
  onClick?: () => void
  isSubmit?: boolean
  color?: 'red' | 'blue'
}

export const DoubleOrNothingGameStatusButton:FC<DoubleOrNothingGameStatusButtonProps> = observer(({
  bet,
  isDisabled,
  onClick,
  isSubmit,
  color,
}) => {

  const backgroundImg = useMemo(() => {
    if (!color) return Double
    if (color === 'red') return RedDouble
    if (color === 'blue') return BlueDouble
  }, [color])
  const text = useMemo(() => {
    if (!color) return "DOUBLE OR NOTHING"
    if (color === 'red') return `RED for ${bet} TON`
    if (color === 'blue') return `BLUE for ${bet} TON`
  }, [color])
  return (
    <Button
      as={'button'}
      backgroundImage={backgroundImg}
      size={'lg'}
      text = {text}
      isDisabled={isDisabled}
      type={isSubmit ? 'submit' : undefined}
      className={classes.button}
      onClick={onClick}
    />
  )
})