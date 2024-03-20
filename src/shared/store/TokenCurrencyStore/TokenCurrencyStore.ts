import { makeAutoObservable } from 'mobx'

import { client } from "../../config/tonApi/config.ts"
import { ActivateDeactivate } from "../../lib/store/activate.ts"

export class TokenCurrencyStore implements ActivateDeactivate {
  currency?: number = undefined
  isActivated = false

  constructor() {
    makeAutoObservable(this)
  }

  async activate(): Promise<void> {
    const result = (await client.rates.getRates({
      tokens: ['ton'],
      currencies: ['usd'],
    })).rates.TON.prices?.USD

    this.currency = result
  }

  reset() {
    this.currency = 0
  }

  deactivate(): void {
    this.reset()
  }

}
