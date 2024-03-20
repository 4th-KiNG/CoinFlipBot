import { Address,beginCell } from "@ton/core"
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react"
import { useCallback } from "react"

import { contractAddress } from "../../../shared/config/contracts/master.ts"
import { waitTx } from "../../../shared/lib/waitTx/waitTx.ts"
import { useStatusState } from "../../../shared/lib/wrapper/useStatusWrapper.ts"

export const useDeposit = () => {
  const [tonConnectUi] = useTonConnectUI()
  const walletAddress = useTonAddress()

  const { wrapPromise, statuses, setResult } = useStatusState<boolean | undefined, string>()

  const deposit = useCallback(wrapPromise(async (bet?: string) => {
    if (!bet) return

    console.log(beginCell().storeUint(0, 1).storeUint(BigInt(1), 64).endCell().toBoc().toString('base64'))
    console.log(beginCell().storeUint(0x2c2e7838, 32).storeUint(BigInt(1), 64).endCell().toBoc().toString('base64'))

    const result = await tonConnectUi.sendTransaction({
      validUntil: Date.now() + 360 * 24 * 1000,
      messages: [{
        address: contractAddress,
        amount: bet,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        payload: beginCell().storeUint(0x2c2e7838, 32).storeUint(BigInt(1), 64).endCell().toBoc().toString('base64'),
      }],
    })
    console.log(result)
    const result2 = await waitTx(Address.parse(walletAddress), BigInt(bet))

    console.log(result2)

    return result2
  }), [tonConnectUi, walletAddress])
  
  return {
    deposit,
    ...statuses,
    setResult,
  }
}