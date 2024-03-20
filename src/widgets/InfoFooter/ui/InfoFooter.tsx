import { observer } from "mobx-react-lite"
import { useCallback } from "react"

import { useStores } from "../../../shared/store/StoreProvider.tsx"
import { Txt } from "../../../shared/ui/display/Txt/Txt.tsx"
import { FAQModal } from "./FAQModal/FAQModal.tsx"
import { HowToPlayModal } from "./HowToPlayModal/HowToPlayModal.tsx"
import classes from './InfoFooter.module.scss'
import { TermsModal } from "./TermsModal/TermsModal.tsx"

export const InfoFooter = observer(() => {

  const { dialogStore } = useStores()

  const openTermsModal = useCallback(() => {
    dialogStore.open({
      Component: TermsModal,
    })
  }, [dialogStore])

  const openHowToPlayModal = useCallback(() => {
    dialogStore.open({
      Component: HowToPlayModal,
    })
  }, [dialogStore])

  const openFAQModal = useCallback(() => {
    dialogStore.open({
      Component: FAQModal,
    })
  }, [dialogStore])
  
  return (
    <div className={classes.container}>
      <Txt className={classes.text} onClick={openFAQModal}>FAQ</Txt>
      <Txt className={classes.text} onClick={openHowToPlayModal}>How to play</Txt>
      <Txt className={classes.text} onClick={openTermsModal}>Terms and Conditions</Txt>
    </div>
  )
})