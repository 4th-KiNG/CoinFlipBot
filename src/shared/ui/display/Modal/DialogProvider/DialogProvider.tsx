import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStores } from "../../../../store/StoreProvider.tsx"

export const DialogProvider: React.FC = observer(() => {
  const { dialogStore } = useStores()

  return (
    <>
      {dialogStore.instances.map(({ id, props, open, Component }) => (
        <Component
          {...props}
          key={id}
          open={open}
          id={id}
          onClose={() => dialogStore.closeById(id)}
        />
      ))}
    </>
  )
})