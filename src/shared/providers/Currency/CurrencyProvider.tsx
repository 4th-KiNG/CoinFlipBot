import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

import { useActivatedStore } from "../../lib/store/useActivateStore.ts"

export const CurrencyProvider: FC<PropsWithChildren> = observer(({ children }) => {

  useActivatedStore('tokenCurrencyStore')

  return children
})