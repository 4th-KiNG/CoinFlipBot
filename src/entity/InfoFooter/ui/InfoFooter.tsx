import { observer } from "mobx-react-lite"

import { Txt } from "../../../shared/ui/display/Txt/Txt.tsx"

export const InfoFooter = observer(() => {
  return (
    <div>
      <Txt>FAQ</Txt>
      <Txt>How to play</Txt>
      <Txt>Terms and Conditions</Txt>
    </div>
  )
})