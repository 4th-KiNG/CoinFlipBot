import { observer } from "mobx-react-lite"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import sound1 from '/assets/sounds/sound1.mp3'
import useSound from "use-sound"
import InputIcon from '/assets/Number box.png'

import { EnterAmount } from "../../../../../entity/EnterAmount/EnterAmount.tsx"
import {
  DoubleOrNothingGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/DobuleOrNothing/DoubleOrNothingGameStatusButton.tsx"
import { InitGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/Init/InitGameStatusesRobot.tsx"
import { ChosePaymentFeature } from "../../../../../features/ChosePayment/ui/ChosePaymentFeature.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import { Input } from "../../../../../shared/ui/control/Form"
import statusClasses from '../../GameStatus.module.scss'

export interface PlaceBetValues {
  value: string
}

export const PlaceBet = observer(() => {

  const { gameStatusStore, tokenCurrencyStore } = useStores()

  const [betValue, setBetValue] = useState<string>('')
  const [play] = useSound(sound1)
  const { control,
    handleSubmit,
    formState: { isValid },
    setValue,
    reset,
    watch,
  } = useForm<PlaceBetValues>({
    mode: "all",
    defaultValues: {
      value: '',
    },
  })

  useEffect(() => {
    console.log(betValue)
    reset({
      value: betValue,
    })
  }, [betValue])

  const betWatch = watch('value')

  const onPaymentChange = useCallback((payment: 'ton' | 'usd') => {

    console.log(payment)

    if (tokenCurrencyStore.currency === undefined) return

    gameStatusStore.setCurrency(payment)

    if (payment === 'ton') setBetValue((parseFloat(betWatch) / tokenCurrencyStore.currency).toString())
    if (payment === 'usd') setBetValue((parseFloat(betWatch) * tokenCurrencyStore.currency).toString())
  }, [tokenCurrencyStore.currency, betWatch, setBetValue])

  const onSubmit = useCallback((data: PlaceBetValues) => {
    gameStatusStore.setValue(data.value)
  }, [gameStatusStore])

  return (
    <form
      className={statusClasses.statusContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InitGameStatusesRobot />
      <div className={statusClasses.enterAmountContainer}>
        <EnterAmount />
        <div className={statusClasses.betContainer}>
          <ChosePaymentFeature onPaymentChange={onPaymentChange} />
          <Input<PlaceBetValues>
            background={InputIcon}
            controlledInputProps={{
              name: 'value',
              control,
              setValue,
              validateParams: {
                isOnlyNumbers: true,
                notGreatSymbol: 5,
                isNatural: true,
              },
              rules: {
                required: 'Bet is required',
                validate: (value: string) => {
                  if (value === 'NaN') return 'Bet is required'
                },
              },
            }}
          />
        </div>

      </div>

      <DoubleOrNothingGameStatusButton 
      isSubmit
      isDisabled={!isValid || Number.isNaN(betWatch)}
      onClick={() => {
        play()
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      }} />
    </form>
  )
})