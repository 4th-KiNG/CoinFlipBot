import { Address } from "@ton/core"
import { makeAutoObservable } from "mobx"
import { AccountEvents } from "tonapi-sdk-js"

import { Game } from "../../../entity/GameHistoryCard/lib/types.ts"
import { client } from "../../../shared/config/tonApi/config.ts"
import { ActivateDeactivate } from "../../../shared/lib/store/activate.ts"
import { contractAddress } from "../../../shared/config/contracts/master"

export class GameHistoryStore implements ActivateDeactivate {
  games: Game[] = []
  hasMore: boolean = true
  isActivated: boolean = false
  ownerAddress: string = ''
  constructor() {
    makeAutoObservable(this)
  }

  txToGame(data: AccountEvents, ownerAddress: string): Game[] {
    return data.events.map((item) => {
      const action = item.actions[0]
      const address = action.simple_preview.accounts[0].address
      const preparedAddress = Address.parse(address).toString({ bounceable: false })
      const isOwner = ownerAddress !== '' ? Address.parse(ownerAddress).toString({ bounceable: false }) === preparedAddress : false

      return {
        userAddress: isOwner ? 'You' : Address.parse(address).toString({ bounceable: false }),
        isWin: item.actions.length > 3,
        date: item.timestamp,
        value: item.actions[0].SmartContractExec?.ton_attached?.toString(),
        event: item.event_id,
        lt: item.lt,
      }
    })
  }

  private async request(ownerAddress: string) {
    const result = await client.accounts.getAccountEvents(contractAddress, {
      before_lt: (this.games.length > 0 && this.games?.[this.games?.length - 1].lt) ? this.games?.[this.games?.length - 1].lt : undefined,
      limit: 100,
    })
    if (result.events.length < 1) {
      this.hasMore = false

      return
    }


    this.games = [...this.games, ...this.txToGame(result, ownerAddress)]
    console.log(this.games)
  }

  activate (ownerAddress: string) {
    if (!ownerAddress || ownerAddress === '') return
    void this.request(ownerAddress)
    this.ownerAddress = ownerAddress
  }

  requestMore() {
    void this.request(this.ownerAddress)
  }

  reload() {
    this.activate(this.ownerAddress)
  }

  deactivate() {
    this.restore()
  }

  restore() {
    this.games = []
    this.ownerAddress = ''
    this.hasMore = true
  }
}
