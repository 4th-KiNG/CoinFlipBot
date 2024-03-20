import { observer } from "mobx-react-lite"
import { FC } from "react"

import { AppDialogProps } from "../../../../shared/lib/dialog/dialog-props.ts"
import { Button } from "../../../../shared/ui/control/Button"
import { Modal } from "../../../../shared/ui/display/Modal"
import { Txt } from "../../../../shared/ui/display/Txt/Txt.tsx"
import classes from '../InfoFooter.module.scss'

interface HowToPlayProps extends AppDialogProps {}

export const HowToPlayModal: FC<HowToPlayProps> = observer(({ open, onClose }) => {
  return (
    <Modal isOpen={open} className={classes.modalContainer} onClose={onClose}>
      <div className={classes.modalContent}>
        <Txt className={classes.title}>How to Play</Txt>
        <div className={classes.contentBlock}>
          <Txt className={classes.blockTitle}>What is TON FLIP BOT?</Txt>
          <div style={{ height: '1px', width: '100%', background: 'black' }} />
          <Txt>TON FLIP BOT is a smart contract that allows users to play Double or Nothing with their TON tokens. Odds are 50/50 with a 3.5% fee</Txt>
        </div>
        <Button
          className={classes.button}
          as={'button'}
          onClick={() => {
            onClose()
          }}
        > GOT IT
        </Button>
      </div>
    </Modal>
  )
})