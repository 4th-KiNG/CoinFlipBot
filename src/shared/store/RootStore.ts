import { enableStaticRendering } from "mobx-react-lite"

import { GameHistoryStore } from "../../widgets/GameHistory/model/GameHistoryStore.ts"
import { GameStatusStore } from "../../widgets/GameStatus/model/GameStatusStore.ts"
import { DialogStore } from "./Dialog/DialogStore.ts"
import { ErrorStore } from "./Error/ErrorStore.ts"
import { PopUpStore } from "./PopUpStore/PopUpStore.ts"
import { TokenCurrencyStore } from "./TokenCurrencyStore/TokenCurrencyStore.ts"
import { UserStore } from "./UserStore/UserStore.ts"

enableStaticRendering(typeof window === "undefined")

export class RootStore {
  errorStore: ErrorStore
  dialogStore: DialogStore
  gameStatusStore: GameStatusStore
  userStore: UserStore
  popUpStore: PopUpStore
  tokenCurrencyStore: TokenCurrencyStore
  gameHistoryStore: GameHistoryStore

  constructor() {
    this.dialogStore = new DialogStore()
    this.errorStore = new ErrorStore(this)
    this.tokenCurrencyStore = new TokenCurrencyStore()
    this.gameStatusStore = new GameStatusStore(this)
    this.userStore = new UserStore()
    this.popUpStore = new PopUpStore()
    this.gameHistoryStore = new GameHistoryStore()
  }
}

export const rootStore = new RootStore()
