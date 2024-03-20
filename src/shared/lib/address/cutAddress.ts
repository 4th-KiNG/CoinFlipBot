import { Address } from "@ton/core"

export const cutAddress = (address?: string) => {
  if (!address) return

  if (!Address.isFriendly(address)) return address

  return address.slice(0,3) + '...' + address.slice(address.length - 3, address.length)
}