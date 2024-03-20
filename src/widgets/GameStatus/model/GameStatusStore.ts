import { makeAutoObservable } from "mobx"

import { RootStore } from "../../../shared/store/RootStore.ts"
import { TokenCurrencyStore } from "../../../shared/store/TokenCurrencyStore/TokenCurrencyStore.ts"

export class GameStatusStore {
  value: string | undefined = undefined
  color?: 'red' | 'blue' = undefined
  currency: 'ton' | 'usd' = 'ton'
  currencyStore: TokenCurrencyStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.currencyStore = rootStore.tokenCurrencyStore
  }

  setValue(value: string) {
    this.value = value
    console.log(value)
  }

  setColor(color: 'red' | 'blue') {
    this.color = color
  }

  setCurrency(currency: 'ton' | 'usd') {
    this.currency = currency
    console.log(currency)
  }

  get bet() {
    console.log('CHANGE')
    console.log(this.currency)
    let temp = this.value
    if (this.currency === 'usd'){
      temp = Math.ceil(parseFloat(this.value ?? '0') / (this.currencyStore.currency ?? 1)).toString()
    }
    
    return (BigInt(temp ?? '0') * BigInt(Math.pow(10, 9))).toString()
  }


  restore() {
    this.value = undefined
    this.color = undefined
    this.currency = 'ton'
  }
}
